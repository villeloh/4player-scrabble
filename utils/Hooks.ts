import { initLetters, initTiles } from './init';
import { useState, MouseEvent } from 'react';
import TileObj from 'model/TileObj';
import LetterObj from 'model/LetterObj';

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

export function useTiles() {

  const [tiles, setTiles] = useState(initTiles());

  const dropLetterOn = (clickedTile: TileObj, letterObj: LetterObj) => {

    // highly inefficient... It would be better to use coordinate (x,y) to alter 
    // the state and spread the array of arrays in the set method, but the correct syntax escapes me atm
    const newTiles = tiles.map(row => {

      return row.map(tileObj => {
        if (clickedTile.id === tileObj.id) {
          return new TileObj(tileObj.id, tileObj.x, tileObj.y, tileObj.bonus, letterObj);
        } else {
          return tileObj;
        }
      });
    });
    setTiles(newTiles);
  };

  const pickUpLetterFrom = (clickedTile: TileObj) => {

    if (!clickedTile.letter) return;

    // again, array spread syntax error prevents efficiency
    const newTiles = tiles.map(row => {

      return row.map(tileObj => {
        if (tileObj.id === clickedTile.id && tileObj.letter) {
          return new TileObj(tileObj.id, tileObj.x, tileObj.y, tileObj.bonus);
        } else {
          return tileObj;
        }
      });
    });
    setTiles(newTiles);
    return clickedTile.letter;
  };

  return { tiles, dropLetterOn, pickUpLetterFrom };
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