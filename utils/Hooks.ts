import { initLetters, initTiles } from './init';
import { useState, MouseEvent } from 'react';
import TileObj, { BONUS } from 'model/TileObj';
import LetterObj from 'model/LetterObj';
import Word from 'model/Word';

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

  // store the locations of the 'locked' letters that have been scored in the past.
  const [lockedLetterTileIds, setLockedLetterTileIds] = useState(new Set<number>());

  // letters that have been dropped on the board, but not locked on it yet
  const [newLetterTileIds, setNewLetterTileIds] = useState(new Set<number>());

  const dropLetterOn = (clickedTile: TileObj, letterObj: LetterObj) => {

    const newTileWithLetter = new TileObj(clickedTile.id, clickedTile.bonus, letterObj);

    // replace the old, empty tile with it
    setTiles(new Map<number, TileObj>([...tiles, [clickedTile.id, newTileWithLetter]]));
    setNewLetterTileIds(new Set([...newLetterTileIds, clickedTile.id]));
  };

  const pickUpLetterFrom = (clickedTile: TileObj) => {

    if (!clickedTile.letter) return;

    const newTileWithoutLetter = new TileObj(clickedTile.id, clickedTile.bonus);

    // replace the old, occupied tile with it
    setTiles(new Map<number, TileObj>([...tiles, [clickedTile.id, newTileWithoutLetter]]));

    const newBoardLetterTileIds = new Set(newLetterTileIds);
    newBoardLetterTileIds.delete(clickedTile.id);
    setNewLetterTileIds(newBoardLetterTileIds);

    return clickedTile.letter;
  };

  const lockBoardLetters = () => {

    setLockedLetterTileIds(new Set<number>(newLetterTileIds));
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

    let tile = tiles.get(searchId);
    let word = '';
    let char: string | undefined = tile!.letter!.char;

    while (char) {

      // base value without any bonuses
      charPoints += tile!.letter!.value;

      const isNewChar = !lockedLetterTileIds.has(searchId);

      // old chars' bonuses are not applied
      if (isNewChar) {
        // includes BONUS.CENTER too (since its value is 20 as well)
        if (tile!.bonus === BONUS.WSx2 || tile!.bonus === BONUS.WSx3) {

          // see TileObj for the division 'logic'...
          wordBonusMultiplier *= tile!.bonus / 10;
        } else if (tile!.bonus === BONUS.CENTER) {

          wordBonusMultiplier *= tile!.bonus / 20;
        } else { //  Bonus.NONE or has a letter ('char') score bonus
          charPoints *= tile!.bonus; // x 1, 2, or 3
        }
      }
      word += char;
      wordPoints += charPoints;

      char = tiles.get(++searchId)?.letter?.char;
      charPoints = 0; // prepare for next char
    } // end while-loop
    wordPoints *= wordBonusMultiplier;

    return new Word(word, wordPoints);
  };

  const getVerticalWord = (startTileId: number) => {

    let wordPoints = 0;
    let wordBonusMultiplier = 1;

    let charPoints = 0;

    let searchId = topmostLetteredTilesId(startTileId);

    let tile = tiles.get(searchId);
    let word = '';
    let char: string | undefined = tile!.letter!.char;

    while (char) {

      // base value without any bonuses
      charPoints += tile!.letter!.value;

      const isNewChar = !lockedLetterTileIds.has(searchId);

      // old chars' bonuses are not applied
      if (isNewChar) {
        if (tile!.bonus === BONUS.WSx2 || tile!.bonus === BONUS.WSx3) {

          // see TileObj for the division 'logic'...
          wordBonusMultiplier *= tile!.bonus / 10;
        } else if (tile!.bonus === BONUS.CENTER) {

          wordBonusMultiplier *= tile!.bonus / 20;
        } else { // Bonus.NONE or has a letter ('char') score bonus
          charPoints *= tile!.bonus; // x 1, 2, or 3
        }
      }
      word += char;
      wordPoints += charPoints;

      char = tiles.get(searchId += VERTICAL_JUMP)?.letter?.char;
      charPoints = 0; // prepare for next char
    } // end while-loop
    wordPoints *= wordBonusMultiplier;

    return new Word(word, wordPoints);
  };

  const getUnverifiedWordsAndPoints = (idsOfNewLetteredTiles: number[]) => {

    const words = new Set<Word>();

    idsOfNewLetteredTiles.forEach(id => {

      // a lot of duplicate operations, but who cares, the array is very small
      words.add(getHorizontalWord(id));
      words.add(getVerticalWord(id));
    });

    // points will only be applied if the words are valid (fulfill Dictionary API call & length > 1 char)
    return words;
  };

  return { tiles, dropLetterOn, pickUpLetterFrom, lockBoardLetters, getUnverifiedWordsAndPoints };
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

  // used when exchanging letters
  const putLettersInPouch = (letters: LetterObj[]) => {

    setLetterPouch([...letterPouch, ...letters]);
  };

  return {
    letterPouch,
    takeLettersFromPouch,
    putLettersInPouch
  };
};

// passing references to other stateful objects to the hook seems like bad form; think of other solutions
export function useRack(
  letterPouch: LetterObj[],
  takeLettersFromPouch: (amount: number) => LetterObj[],
  putLettersInPouch: (letters: LetterObj[]) => void) {

  // always have 7 letters (including null :p) so that the visual rack works properly
  const capacity = 7;

  const [rack, setRack] = useState<Map<number, LetterObj | null>>(
    new Map([[0, null], [1, null], [2, null], [3, null], [4, null], [5, null], [6, null]])
  );

  const addLettersToRack = (letters: LetterObj[]) => {

    const newRack = new Map<number, LetterObj | null>(rack);

    rack.forEach((oldLetter, slotId) => {

      const letterToAdd = letters[slotId]; // we can use the slotId to iterate these too

      if (oldLetter === null && letterToAdd) {

        // set isClickable to true on the immutable LetterObjs
        const clickableLetter = new LetterObj(letterToAdd.id, letterToAdd.char, letterToAdd.value, true, false);

        newRack.set(slotId, clickableLetter);
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
      if (rack.get(id) === null) {
        numToDraw++;
      }
    });
    addLettersToRack(takeLettersFromPouch(numToDraw));
  };

  // convoluted mess; think of improvements
  const exchangeRackLetters = (lettersToExchange: [LetterObj]) => {

    // Game Rule: can only exchange letters if the pouch has > 7 left
    if (letterPouch.length <= capacity) return;

    const rackCopy = new Map<number, LetterObj | null>(rack);

    // remove the selected letters from the rack
    rack.forEach((letterObj, id) => {

      if (lettersToExchange.find(letter => { return letter.id === letterObj?.id }))
        rackCopy.set(id, null);
    });
    setRack(rackCopy);

    putLettersInPouch(lettersToExchange); // return them to the pouch

    const newLetters = takeLettersFromPouch(lettersToExchange.length);
    addLettersToRack(newLetters);
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