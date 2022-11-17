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

          // see TileObj for the division logic
          wordBonusMultiplier *= tile!.bonus / 10;
        } else { //  Bonus.NONE or has a letter ('char') score bonus
          charPoints *= tile!.bonus; // x 1, 2, or 3
        }
      }
      word += char;
      wordPoints += charPoints;

      char = tiles.get(++searchId)?.letter?.char;
      charPoints = 0; // prepare for next char
    }
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
        // includes BONUS.CENTER too (since its value is 20 as well)
        if (tile!.bonus === BONUS.WSx2 || tile!.bonus === BONUS.WSx3) {

          // see TileObj for the division logic
          wordBonusMultiplier *= tile!.bonus / 10;
        } else { // Bonus.NONE or has a letter ('char') score bonus
          charPoints *= tile!.bonus; // x 1, 2, or 3
        }
      }
      word += char;
      wordPoints += charPoints;

      char = tiles.get(searchId += VERTICAL_JUMP)?.letter?.char;
      charPoints = 0; // prepare for next char
    }
    wordPoints *= wordBonusMultiplier;

    return new Word(word, wordPoints);
  };

  const getUnverifiedWordsAndPoints = (idsOfNewLetteredTiles: number[]) => {

    const words = new Set<Word>();

    // Game Rule: emptying the whole rack earns 50 bonus points
    let points = idsOfNewLetteredTiles.length === 7 ? 50 : 0;

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

  const capacity = 7;

  // infinite rerender loop if we fill the array here with takeLettersFromPouch(), so it's empty to begin with
  const [rack, setRack] = useState<LetterObj[]>([]);

  const setRackLetters = (letters: LetterObj[]) => {

    // set isClickable to true on the immutable LetterObjs
    setRack([...letters.map(letter => {
      return new LetterObj(letter.id, letter.char, letter.value, true, false);
    })]);
  };

  const removeRackLetter = (letterObj: LetterObj) => {

    setRackLetters(rack.filter(letter => { return letter.id !== letterObj.id }));
  };

  const refillRack = () => {
    const amountToDraw = capacity - rack.length;
    setRackLetters([...rack, ...takeLettersFromPouch(amountToDraw)]);
  };

  const exchangeRackLetters = (selectedLetters: [LetterObj]) => {

    // Game Rule: can only exchange letters if the pouch has > 7 left
    if (letterPouch.length <= capacity) return;

    // leave only the LetterObjs that were not in selectedLetters
    setRackLetters([...rack.filter(letterObj => {
      return selectedLetters.find(selectedLetterObj => {
        return letterObj.id !== selectedLetterObj.id
      })
    })]);
    const newLetters = takeLettersFromPouch(selectedLetters.length);
    putLettersInPouch(selectedLetters); // return them to the pouch
    setRackLetters([...rack, ...newLetters]);
  };

  return {
    rack,
    removeRackLetter,
    setRackLetters,
    refillRack,
    exchangeRackLetters
  };
};