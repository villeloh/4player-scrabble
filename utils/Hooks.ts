import { initLetters, initTiles } from './init';
import { useState, MouseEvent, useEffect } from 'react';
import LetterObj from 'model/LetterObj';
import WordResult from 'model/WordResult';
import { MULTIPLIER } from 'model/TileObj';

// TODO: think about using useReducer() in some hooks

export function useMouseMove() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    e.persist();
    setPosition(() => ({ x: e.clientX, y: e.clientY }));
  };

  return {
    mouseX: position.x,
    mouseY: position.y,
    handleMouseMove
  };
};

export function useBoard() {

  enum BOARD_ERROR {
    NO_BLANK = 'GAME RULE: Please select a character for all blank Letters!',
    NO_GAPS = 'GAME RULE: No gaps allowed between placed words!',
    NO_ANGLES = 'GAME RULE: No angles allowed in placed words!',
    NO_DANGLING = 'GAME RULE: No dangling letters allowed!',
    INCLUDE_CENTER = 'GAME RULE: The first word must include the center tile (star)!',
    TOUCH_OLD_WORD = 'GAME RULE: All new words must touch at least one old word!'
  }

  // Due to using a Map<id, TileObj> to store the tiles, a jump in id number by this amount will bring us 
  // directly under the current tile on the board (a negative jump will bring us to the tile 
  // that's on top of the current tile)
  const VERTICAL_JUMP = 15;

  const [tiles] = useState(initTiles()); // I guess it could be a regular JS object now that it's static?
  const [oldBoardLetters, setOldBoardLetters] = useState(new Map<number, LetterObj>());
  const [newBoardLetters, setNewBoardLetters] = useState(new Map<number, LetterObj>());
  const [boardLetters, setBoardLetters] = useState(new Map([...oldBoardLetters, ...newBoardLetters]));

  useEffect(() => {
    setBoardLetters(new Map([...oldBoardLetters, ...newBoardLetters]));
  }, [oldBoardLetters, newBoardLetters]);

  const [isFirstPlay, setIsFirstPlay] = useState(true);

  // TODO: think of a better way to do this
  useEffect(() => {
    if (isFirstPlay && oldBoardLetters.size > 0) {
      setIsFirstPlay(false);
    }
  }, [oldBoardLetters]);

  const addLetterOnBoard = (tileId: number, letterObj: LetterObj) => {

    const newState = new Map(newBoardLetters);
    newState.set(tileId, letterObj);
    setNewBoardLetters(newState);
  };

  const takeLetterFromBoard = (tileId: number) => {

    const letter = newBoardLetters.get(tileId);

    if (letter) {
      const newState = new Map(newBoardLetters);
      newState.delete(tileId);
      setNewBoardLetters(newState);
    }
    return letter;
  };

  // weird staleness issue with the board visuals unless we batch the re-racking of letters
  const takeLettersFromBoard = (tileIds: number[]) => {

    const letters: LetterObj[] = [];

    const newState = new Map(newBoardLetters);

    tileIds.forEach(id => {

      const letter = newBoardLetters.get(id);

      if (letter) {
        newState.delete(id);
        letters.push(letter);
      }
    });
    setNewBoardLetters(newState);
    return letters;
  };

  const lockBoardLetters = () => {

    // set isClickable to false for the immutable objects
    const lockedBoardLetters = [...oldBoardLetters, ...newBoardLetters].map(idAndLetter => {
      const tileId = idAndLetter[0];
      const letter = idAndLetter[1];
      const newItem: [number, LetterObj] = [tileId, new LetterObj(letter.id, letter.char, letter.value, false)];
      return newItem;
    });

    setOldBoardLetters(new Map(lockedBoardLetters));
    setNewBoardLetters(new Map());
  };

  const leftmostLetteredTilesId = (searchId: number) => {

    let leftmostId = searchId;

    const allLetters = new Map([...oldBoardLetters, ...newBoardLetters]);

    let isLetterToTheLeft = allLetters.get(--searchId) !== undefined;

    while (isLetterToTheLeft) {

      leftmostId = searchId;
      isLetterToTheLeft = allLetters.get(--searchId) !== undefined;
    }
    return leftmostId; // id of leftmost tile that still had a letter on it
  };

  const topmostLetteredTilesId = (searchId: number) => {

    let topmostId = searchId;

    const allLetters = new Map([...oldBoardLetters, ...newBoardLetters]);

    let isLetterUp = allLetters.get(searchId - VERTICAL_JUMP) !== undefined;

    while (isLetterUp) {

      topmostId = searchId;
      isLetterUp = allLetters.get(searchId -= VERTICAL_JUMP) !== undefined;
    }
    return topmostId; // id of topmost tile that still had a letter on it
  };

  const getHorizontalWord = (startTileId: number) => {

    const allLetters = new Map([...oldBoardLetters, ...newBoardLetters]);

    let wordPoints = 0;
    let wordBonusMultiplier = 1;

    let charPoints = 0;

    let searchId = leftmostLetteredTilesId(startTileId);

    let letter = allLetters.get(searchId);
    let word = '';

    while (letter) {

      // base value without any bonuses
      charPoints += letter.value;

      const isNewChar = !oldBoardLetters.has(searchId);

      // old chars' bonuses are not applied
      if (isNewChar) {

        const tile = tiles.get(searchId);

        if (tile!.bonus === 'WSx2' || tile!.bonus === 'WSx3' || tile!.bonus === 'CENTER') {

          wordBonusMultiplier *= MULTIPLIER[tile!.bonus];
        } else { //  Bonus.NONE (= x1) or has a letter ('char') score bonus
          charPoints *= MULTIPLIER[tile!.bonus]; // x 1, 2, or 3
        }
      }
      word += letter.char;
      wordPoints += charPoints;

      letter = allLetters.get(++searchId);
      charPoints = 0; // prepare for next char
    } // end while-loop
    wordPoints *= wordBonusMultiplier;

    return new WordResult(word, wordPoints);
  };

  const getVerticalWord = (startTileId: number) => {

    const allLetters = new Map([...oldBoardLetters, ...newBoardLetters]);

    let wordPoints = 0;
    let wordBonusMultiplier = 1;

    let charPoints = 0;

    let searchId = topmostLetteredTilesId(startTileId);

    let letter = allLetters.get(searchId);
    let word = '';

    while (letter) {

      // base value without any bonuses
      charPoints += letter.value;

      const isNewChar = !oldBoardLetters.has(searchId);

      // old chars' bonuses are not applied
      if (isNewChar) {

        const tile = tiles.get(searchId);

        if (tile!.bonus === 'WSx2' || tile!.bonus === 'WSx3' || tile!.bonus === 'CENTER') {

          wordBonusMultiplier *= MULTIPLIER[tile!.bonus];
        } else { // Bonus.NONE or has a letter ('char') score bonus
          charPoints *= MULTIPLIER[tile!.bonus]; // x 1, 2, or 3
        }
      }
      word += letter.char;
      wordPoints += charPoints;

      letter = allLetters.get(searchId += VERTICAL_JUMP);
      charPoints = 0; // prepare for next char
    } // end while-loop
    wordPoints *= wordBonusMultiplier;

    return new WordResult(word, wordPoints);
  };

  // TODO: tidy this up somehow
  const getUnverifiedWordsAndPoints = () => {

    try {
      validateNewLetterPlacement();
    } catch (error) {
      const err = error as Error;
      throw err;
    }

    let checkForCenterTile = isFirstPlay;
    let centerTileIncluded = false;

    let words = new Set<WordResult>();

    newBoardLetters.forEach((_, id) => {

      if (checkForCenterTile) {
        if (tiles.get(id)?.bonus === 'CENTER') {
          centerTileIncluded = true;
          checkForCenterTile = false;
        }
      }

      // a lot of duplicate operations, but who cares, the array is very small
      const horizontal = getHorizontalWord(id);
      const vertical = getVerticalWord(id);

      const horizLengthOk = horizontal.word.length > 1;
      const vertLengthOk = vertical.word.length > 1;

      if (!horizLengthOk && !vertLengthOk) {
        throw new Error(BOARD_ERROR.NO_DANGLING);
      }
      if (horizLengthOk) {
        words.add(horizontal);
      }
      if (vertLengthOk) {
        words.add(vertical);
      }
    }); // end forEach

    if (isFirstPlay && !centerTileIncluded) {
      throw new Error(BOARD_ERROR.INCLUDE_CENTER);
    }

    words = WordResult.removeDuplicateValues(words);

    let points = [...words].map(wordResult => wordResult.points).reduce((prev, curr) => prev + curr);
    if (newBoardLetters.size === 7) {
      points += 50; // using all 7 letters at once gives 50 bonus points
    }
    const wordsToReturn = [...words].map(wordResult => wordResult.word);

    return { words: wordsToReturn, points };
  };

  // validate regarding gaps, adjacency to old board letters, and angle containment
  // TODO: combine the monster for-loops somehow
  const validateNewLetterPlacement = () => {

    const xArr: any[] = [];
    const yArr: any[] = [];

    // we need actual coordinates to easily do the needed operations
    newBoardLetters.forEach((letterObj, tileId) => {

      if (letterObj.char === '') {
        throw new Error(BOARD_ERROR.NO_BLANK);
      }

      const x = getXindexFromTileId(tileId);
      const y = getYindexFromTileId(tileId);
      xArr.push({ x, y });
      yArr.push({ y, x });
    });
    // sort ascending
    xArr.sort((a, b) => a.x - b.x);
    yArr.sort((a, b) => a.y - b.y);

    let xIdentical = true;
    let yIdentical = true;

    for (let i = 0; i < xArr.length - 1; i++) {
      const xValue = xArr[i].x;
      const rightNeighborXvalue = xArr[i + 1].x;

      if (xValue !== rightNeighborXvalue) {
        xIdentical = false;
      }

      if (rightNeighborXvalue - xValue > 1) {
        const inbetweenTileCoords = range(rightNeighborXvalue - (xValue + 1), xValue + 1).map(xCoord => {
          return { x: xCoord, y: +xArr[i].y };
        });
        const inbetweenTileIds = inbetweenTileCoords.map(coords => {
          return getTileIdFromCoords(coords);
        });
        inbetweenTileIds.forEach(id => {

          // any gaps between the new letters need to have 'old' board letters in them
          if (!oldBoardLetters.has(id)) {
            // early return is a bit unclear, but just to make this *slightly* more efficient
            throw new Error(BOARD_ERROR.NO_GAPS);
          }
        });
      }
    } // end x-sorted for-loop

    for (let i = 0; i < yArr.length - 1; i++) {
      const yValue = yArr[i].y;
      const downNeighborYvalue = yArr[i + 1].y;

      if (yValue !== downNeighborYvalue) {
        yIdentical = false;
      }

      if (downNeighborYvalue - yValue > 1) {
        const inbetweenTileCoords = range(downNeighborYvalue - (yValue + 1), yValue + 1).map(yCoord => {
          return { y: yCoord, x: +yArr[i].x };
        });
        const inbetweenTileIds = inbetweenTileCoords.map(coords => {
          return getTileIdFromCoords(coords);
        });
        inbetweenTileIds.forEach(id => {

          // any gaps between the new letters need to have 'old' board letters in them
          if (!oldBoardLetters.has(id)) {
            // early return is a bit unclear, but just to make this *slightly* more efficient
            throw new Error(BOARD_ERROR.NO_GAPS);
          }
        });
      }
    } // end y-sorted for-loop

    // the letters must be in a straight line either vertically or horizontally
    if (!(xIdentical || yIdentical)) {
      throw new Error(BOARD_ERROR.NO_ANGLES);
    }

    if (!isFirstPlay) {

      let atLeastOneNewLetterAdjacentToOld = false;

      newBoardLetters.forEach((_, tileId) => {

        const leftOld = oldBoardLetters.get(tileId - 1) !== undefined;
        const rightOld = oldBoardLetters.get(tileId + 1) !== undefined;
        const topOld = oldBoardLetters.get(tileId - VERTICAL_JUMP) !== undefined;
        const downOld = oldBoardLetters.get(tileId + VERTICAL_JUMP) !== undefined;

        if (!atLeastOneNewLetterAdjacentToOld) {

          atLeastOneNewLetterAdjacentToOld = leftOld || rightOld || topOld || downOld;
        }
      });
      if (!atLeastOneNewLetterAdjacentToOld) {
        throw new Error(BOARD_ERROR.TOUCH_OLD_WORD);
      }
    }
  };

  // could be part of useRack as well; matter of taste
  const reRackBoardLetters = (addLettersToRack: Function) => {

    const letters = takeLettersFromBoard([...newBoardLetters.keys()]);
    addLettersToRack(letters);
  };

  return {
    tiles, boardLetters, lettersOnBoard: newBoardLetters.size > 0, addLetterOnBoard, takeLetterFromBoard,
    lockBoardLetters, reRackBoardLetters, getUnverifiedWordsAndPoints
  };
};

export function useLetterPouch() {

  const [letterPouch, setLetterPouch] = useState(initLetters());

  const takeLettersFromPouch = (amount: number) => {

    if (amount > letterPouch.length) {
      amount = letterPouch.length;
    }

    const indices = new Set<number>();

    // ensure no duplicate indices
    while (indices.size < amount) {

      indices.add(Math.floor(Math.random() * letterPouch.length));
    }
    const letters = Array.from(indices).map(index => { return letterPouch[index]; });

    // remove the chosen letters from the pouch
    setLetterPouch([...letterPouch.filter((_, index) => { return !indices.has(index); })]);

    return letters;
  };

  // we need an atomic state update to avoid inconsistent state
  const exchangeLettersThroughPouch = (oldLetters: LetterObj[]) => {

    const indices = new Set<number>();

    // ensure no duplicate indices
    while (indices.size < oldLetters.length) {

      indices.add(Math.floor(Math.random() * letterPouch.length));
    }
    const newLetters = Array.from(indices).map(index => { return letterPouch[index]; });

    // remove the newly drawn letters from the pouch and add the old racked letters
    setLetterPouch([...letterPouch.filter((_, index) => { return !indices.has(index); }), ...oldLetters]);

    return newLetters;
  };

  useEffect(() => {
    console.log('Letters in Pouch: ', letterPouch.length);
  }, [letterPouch]);

  return {
    letterPouch,
    takeLettersFromPouch,
    exchangeLettersThroughPouch
  };
};

// passing references to other stateful objects to the hook seems like bad form; think of other solutions.
// Conversely: maybe the state of exchanged letters should be moved here?
export function useRack(
  letterPouch: LetterObj[],
  takeLettersFromPouch: (amount: number) => LetterObj[],
  exchangeLettersThroughPouch: (letters: LetterObj[]) => LetterObj[]) {

  // always have 7 letters (including undefined :p) so that the visual rack works properly
  const RACK_CAPACITY = 7;

  // the ids are the indices of the rack 'slots'
  const [rack, setRack] = useState<Map<number, LetterObj | undefined>>(
    new Map([[0, undefined], [1, undefined], [2, undefined], [3, undefined], [4, undefined], [5, undefined], [6, undefined]])
  );

  // when letters are returned to the rack, their blankness is restored
  const makeBlank = (letter: LetterObj) => {
    return new LetterObj(letter.id, '', letter.value, true);
  };

  const addLettersToRack = (letters: LetterObj[]) => {

    const newRack = new Map<number, LetterObj | undefined>(rack);
    let index = 0;

    rack.forEach((oldLetter, slotId) => {

      if (!oldLetter) {

        const letterToAdd = letters[index++];

        if (letterToAdd) {
          // set isClickable to true on the immutable LetterObjs
          let clickableLetter = new LetterObj(letterToAdd.id, letterToAdd.char, letterToAdd.value, true);
          if (clickableLetter.value === 0 && !clickableLetter.isCharLocked) {
            clickableLetter = makeBlank(clickableLetter);
          }
          newRack.set(slotId, clickableLetter);
        }
      }
    });
    setRack(newRack);
  };

  const removeRackLetterFrom = (slotId: number) => {

    const rackCopy = new Map<number, LetterObj | undefined>(rack);
    rackCopy.set(slotId, undefined);

    setRack(rackCopy);
  };

  const addRackLetterAt = (slotId: number, letterObj: LetterObj) => {
    if (letterObj.value === 0 && !letterObj.isCharLocked) {
      letterObj = makeBlank(letterObj);
    }

    const rackCopy = new Map<number, LetterObj | undefined>(rack);

    rackCopy.set(slotId, letterObj);
    setRack(rackCopy);
  };

  const refillRack = () => {

    let numToDraw = 0;
    rack.forEach((_, id) => {
      const letter = rack.get(id);
      if (letter === null || letter === undefined) {
        numToDraw++;
      }
    });
    addLettersToRack(takeLettersFromPouch(numToDraw));
  };

  const exchangeRackLetters = (lettersToExchange: LetterObj[]) => {

    // Game Rule: can only exchange letters if the pouch has > 7 left
    if (letterPouch.length <= RACK_CAPACITY) return;

    const newLetters = exchangeLettersThroughPouch(lettersToExchange);

    const rackCopy = new Map<number, LetterObj | undefined>(rack);

    let index = 0;
    rack.forEach((letterObj, id) => {

      if (lettersToExchange.find(letter => { return letter.id === letterObj?.id })) {
        rackCopy.set(id, newLetters[index++]);
      }
    });
    setRack(rackCopy);
  };

  return {
    rack,
    removeRackLetterFrom,
    addRackLetterAt,
    addLettersToRack,
    refillRack,
    exchangeRackLetters
  };
};

export function useTimer(durationMS: number, callback: Function) {

  const startTimer = () => {

    setTimeout(() => {

      callback();
    }, durationMS);
  };
  return startTimer;
};

// ==================== HELPERS =======================================================

// a bad consequence of storing the tileIds as a Map is the lack of a 'real' index
const getXindexFromTileId = (id: number) => {
  const rowNumber = Math.floor(id / 15);
  return id - rowNumber * 15;
};

const getYindexFromTileId = (id: number) => {
  return Math.floor(id / 15);
};

const getTileIdFromCoords = (coords: { x: number, y: number }) => {
  return coords.x + coords.y * 15;
};

// range of numbers; e.g. range(3, 2) => [2,3,4]
const range = (size: number, startAt = 0) => {
  return [...Array(size).keys()].map(i => i + startAt);
};