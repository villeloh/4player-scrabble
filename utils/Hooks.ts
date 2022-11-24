import { initLetters, initTiles } from './init';
import { useState, MouseEvent, useEffect } from 'react';
import TileObj, { BONUS } from 'model/TileObj';
import LetterObj from 'model/LetterObj';
import WordResult from 'model/WordResult';

// Technically, the initX() calls should be given as arguments at the hook callsite,
// but their static nature means they can be called here just as well

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

  // Due to using a Map<id, TileObj> to store the tiles, a jump in id number by this amount will bring us 
  // directly under the current tile on the board (a negative jump will bring us to the tile 
  // that's on top of the current tile)
  const VERTICAL_JUMP = 15;

  const [tiles, setTiles] = useState(initTiles());
  const [isFirstPlay, setIsFirstPlay] = useState(true);

  // store the locations of the 'locked' letters that have been scored in the past.
  const [lockedLetterTileIds, setLockedLetterTileIds] = useState(new Set<number>());

  // letters that have been dropped on the board, but not locked on it yet
  const [newLetterTileIds, setNewLetterTileIds] = useState(new Set<number>());

  useEffect(() => {
    if (isFirstPlay && lockedLetterTileIds.size > 0) {
      setIsFirstPlay(false);
    }
  }, [lockedLetterTileIds]);


  const dropLetterOn = (clickedTile: TileObj, letterObj: LetterObj) => {

    const newTileWithLetter = new TileObj(clickedTile.id, clickedTile.bonus, letterObj);

    // replace the old, empty tile with it
    setTiles(new Map<number, TileObj>([...tiles, [clickedTile.id, newTileWithLetter]]));
    setNewLetterTileIds(new Set([...newLetterTileIds, clickedTile.id]));
  };

  const pickUpLetterFrom = (clickedTile: TileObj) => {

    if (!clickedTile.letter) return;

    const newTileWithoutLetter = new TileObj(clickedTile.id, clickedTile.bonus, undefined);

    const tilesCopy = new Map(tiles);
    tilesCopy.set(clickedTile.id, newTileWithoutLetter);
    setTiles(tilesCopy);

    const newBoardLetterTileIds = new Set(newLetterTileIds);
    newBoardLetterTileIds.delete(clickedTile.id);
    setNewLetterTileIds(newBoardLetterTileIds);

    return clickedTile.letter;
  };

  // weird staleness issue with the board visuals unless we batch the re-racking of letters
  const pickUpLettersFrom = (givenTiles: TileObj[]) => {

    const letters: LetterObj[] = [];
    const newBoardLetterTileIds = new Set(newLetterTileIds);

    const newTilesWithoutLetters = new Map<number, TileObj>();

    givenTiles.forEach(tile => {

      if (tile.letter) {
        const newTileWithoutLetters = new TileObj(tile.id, tile.bonus, undefined);
        newTilesWithoutLetters.set(tile.id, newTileWithoutLetters);
        newBoardLetterTileIds.delete(tile.id);
        letters.push(tile.letter);
      }
    });
    const newTiles = new Map([...tiles, ...newTilesWithoutLetters]);
    setTiles(newTiles);
    setNewLetterTileIds(newBoardLetterTileIds);

    return letters;
  };

  const lockBoardLetters = () => {

    setLockedLetterTileIds(new Set<number>([...lockedLetterTileIds, ...newLetterTileIds]));
    setNewLetterTileIds(new Set<number>());
  };

  const leftmostLetteredTilesId = (searchId: number) => {

    let leftmostId = searchId;

    let isLetterToTheLeft = tiles.get(--searchId)?.letter !== undefined;

    while (isLetterToTheLeft) {

      leftmostId = tiles.get(searchId)!.id;
      isLetterToTheLeft = tiles.get(--searchId)?.letter !== undefined;
    }
    return leftmostId;
  };

  const topmostLetteredTilesId = (searchId: number) => {

    let topmostId = searchId;

    let isLetterUp = tiles.get(searchId - VERTICAL_JUMP)?.letter !== undefined;

    while (isLetterUp) {

      topmostId = tiles.get(searchId)!.id;
      isLetterUp = tiles.get(searchId -= VERTICAL_JUMP)?.letter !== undefined;
    }
    return topmostId;
  };

  const getHorizontalWord = (startTileId: number) => {

    let wordPoints = 0;
    let wordBonusMultiplier = 1;

    let charPoints = 0;

    let searchId = leftmostLetteredTilesId(startTileId);
    const yIndex = getYindexFromTileId(searchId);

    let tile = tiles.get(searchId);
    let word = '';
    let char: string | undefined = tile?.letter?.char;
    console.log('first char: ', char);

    while (char) {

      // base value without any bonuses
      charPoints += tile!.letter!.value;

      const isNewChar = !lockedLetterTileIds.has(searchId);

      // old chars' bonuses are not applied
      if (isNewChar) {
        if (tile!.bonus === BONUS.WSx2 || tile!.bonus === BONUS.WSx3) {

          // see TileObj for the division 'logic'...
          wordBonusMultiplier *= (tile!.bonus / 10);
        } else if (tile!.bonus === BONUS.CENTER) {

          wordBonusMultiplier *= (tile!.bonus / 20);
        } else { //  Bonus.NONE (= x1) or has a letter ('char') score bonus
          charPoints *= tile!.bonus; // x 1, 2, or 3
        }
      }
      word += char;
      wordPoints += charPoints;

      tile = tiles.get(++searchId);
      char = tile?.letter?.char;
      charPoints = 0; // prepare for next char
    } // end while-loop
    wordPoints *= wordBonusMultiplier;

    return { wordResult: new WordResult(word, wordPoints), yIndex };
  };

  const getVerticalWord = (startTileId: number) => {

    let wordPoints = 0;
    let wordBonusMultiplier = 1;

    let charPoints = 0;

    let searchId = topmostLetteredTilesId(startTileId);
    const xIndex = getXindexFromTileId(searchId);

    let tile = tiles.get(searchId);
    let word = '';
    let char: string | undefined = tile?.letter?.char;

    while (char) {

      // base value without any bonuses
      charPoints += tile!.letter!.value;

      const isNewChar = !lockedLetterTileIds.has(searchId);

      // old chars' bonuses are not applied
      if (isNewChar) {
        if (tile!.bonus === BONUS.WSx2 || tile!.bonus === BONUS.WSx3) {

          // see TileObj for the division 'logic'...
          wordBonusMultiplier *= (tile!.bonus / 10);
        } else if (tile!.bonus === BONUS.CENTER) {

          wordBonusMultiplier *= (tile!.bonus / 20);
        } else { // Bonus.NONE or has a letter ('char') score bonus
          charPoints *= tile!.bonus; // x 1, 2, or 3
        }
      }
      word += char;
      wordPoints += charPoints;

      tile = tiles.get(searchId += VERTICAL_JUMP);
      char = tile?.letter?.char;
      charPoints = 0; // prepare for next char
    } // end while-loop
    wordPoints *= wordBonusMultiplier;

    return { wordResult: new WordResult(word, wordPoints), xIndex };
  };

  const getUnverifiedWordsAndPoints = () => {

    // TODO: the new board letters need to touch each other and (as a whole) 
    // at least one locked board letter.
    // One way to do this: if more than 1 horizontal word, ensure their Y indexes are different;
    // if more than 1 vertical word, ensure their X indexes are different

    // TODO: blank tiles' letters need to be chosen before word evaluation,
    // and they need to be returned to the rack (as blank!) upon Error or API verif. failure

    // TODO: lock board letters upon successful word API call; otherwise, return letters
    // to rack

    let checkForCenterTile = isFirstPlay;
    let centerTileIncluded = false;

    // used for ensuring contiguous / valid words
    const horizontalWordYindices: Set<number> = new Set();
    const verticalWordXIndices: Set<number> = new Set();

    const horizontalWords = new Set<WordResult>();
    const verticalWords = new Set<WordResult>();

    newLetterTileIds.forEach(id => {

      if (checkForCenterTile) {
        if (tiles.get(id)?.bonus === BONUS.CENTER) {
          centerTileIncluded = true;
          checkForCenterTile = false;
        }
      }

      // a lot of duplicate operations, but who cares, the array is very small
      const horizontal = getHorizontalWord(id);
      const vertical = getVerticalWord(id);

      horizontalWordYindices.add(horizontal.yIndex);
      verticalWordXIndices.add(vertical.xIndex);

      const horizLengthOk = horizontal.wordResult.word.length > 1;
      const vertLengthOk = vertical.wordResult.word.length > 1;

      if (!horizLengthOk && !vertLengthOk) {
        throw new Error('GAME RULE: Dangling letters are not allowed!');
      }
      if (horizLengthOk) {
        horizontalWords.add(horizontal.wordResult);
      }
      if (vertLengthOk) {
        verticalWords.add(vertical.wordResult);
      }
    });

    if (isFirstPlay && !centerTileIncluded) {
      throw new Error('GAME RULE: First word must include the center tile (star)!');
    }

    // JS Sets are fiddly with objects, so we need to remove duplicate WordResults
    const uniqueHorizWords = WordResult.removeDuplicateValues(horizontalWords);
    const uniqueVertWords = WordResult.removeDuplicateValues(verticalWords);

    // the words must... BLAH; this won't work after all -.-
    if (uniqueHorizWords.size > 1) {
      const valid = horizontalWordYindices.size > 1;
      if (!valid) {
        throw new Error('GAME RULE: Words must be contiguous!');
      }
    }
    if (uniqueVertWords.size > 1) {
      const valid = verticalWordXIndices.size > 1;
      if (!valid) {
        throw new Error('GAME RULE: Words must be contiguous!');
      }
    }

    return WordResult.removeDuplicateValues(new Set([...uniqueHorizWords, ...uniqueVertWords]));
  };

  // could be part of useRack as well; matter of taste
  const reRackBoardLetters = (addLettersToRack: Function) => {

    const tilesToReRack: TileObj[] = [];

    newLetterTileIds.forEach(id => {

      tilesToReRack.push(tiles.get(id)!);
    });

    const letters = pickUpLettersFrom(tilesToReRack);
    addLettersToRack(letters);
  };

  return { tiles, dropLetterOn, pickUpLetterFrom, lockBoardLetters, reRackBoardLetters, getUnverifiedWordsAndPoints };
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

  // keeping this for now; delete at some point
  const putLettersInPouch = (letters: LetterObj[]) => {

    setLetterPouch([...letterPouch, ...letters]);
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

  // always have 7 letters (including null :p) so that the visual rack works properly
  const RACK_CAPACITY = 7;

  // the ids are the indices of the rack 'slots'
  const [rack, setRack] = useState<Map<number, LetterObj | null>>(
    new Map([[0, null], [1, null], [2, null], [3, null], [4, null], [5, null], [6, null]])
  );

  const addLettersToRack = (letters: LetterObj[]) => {

    const newRack = new Map<number, LetterObj | null>(rack);
    let index = 0;

    rack.forEach((oldLetter, slotId) => {

      // TODO: get rid of either null or undefined as a possible value for the letter
      if (oldLetter === null || oldLetter === undefined) {

        const letterToAdd = letters[index++];

        if (letterToAdd) {
          // set isClickable to true on the immutable LetterObjs
          const clickableLetter = new LetterObj(letterToAdd.id, letterToAdd.char, letterToAdd.value, true);
          newRack.set(slotId, clickableLetter);
        }
      }
    });
    setRack(newRack);
  };

  const removeRackLetterFrom = (slotId: number) => {

    const rackCopy = new Map<number, LetterObj | null>(rack);
    rackCopy.set(slotId, null);

    setRack(rackCopy);
  };

  const addRackLetterAt = (slotId: number, letterObj: LetterObj) => {

    const rackCopy = new Map<number, LetterObj | null>(rack);

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

  // convoluted mess; think of improvements
  const exchangeRackLetters = (lettersToExchange: LetterObj[]) => {

    // Game Rule: can only exchange letters if the pouch has > 7 left
    if (letterPouch.length <= RACK_CAPACITY) return;

    const newLetters = exchangeLettersThroughPouch(lettersToExchange);

    const rackCopy = new Map<number, LetterObj | null>(rack);

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

// a bad consequence of storing the tileIds as a Map is the lack of a 'real' index
const getXindexFromTileId = (id: number) => {

  const rowNumber = id % 15;
  return id - rowNumber * 15;
};

const getYindexFromTileId = (id: number) => {

  return id % 15;
};
