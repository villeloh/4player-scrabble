import { initLetters, initTiles } from './init';
import { useState, MouseEvent } from 'react';
import TileObj from 'model/TileObj';
import LetterObj from 'model/LetterObj';

// Technically, the initX() calls should be arguments that are given at the hook callsite,
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

  const dropLetter = (clickedTile: TileObj, letterObj: LetterObj) => {

    // highly inefficient... It would be better to use coordinate (x,y) to alter 
    // the state and spread the array of arrays in the set method, but the correct syntax escapes me atm
    const newState = tiles.map((row) => {

      return row.map((tileObj) => {
        if (clickedTile.id === tileObj.id) {
          return new TileObj(tileObj.id, tileObj.x, tileObj.y, tileObj.bonus, letterObj);
        } else {
          return tileObj;
        }
      });
    });
    setTiles(newState);
  };

  const pickUpLetter = (clickedTile: TileObj) => {

    let letter: LetterObj | undefined = undefined;

    // again, array spread syntax error prevents efficiency
    const newState = tiles.map((row) => {

      return row.map((tileObj) => {
        if (tileObj.id === clickedTile.id && tileObj.letter) {
          letter = clickedTile.letter!;
          return new TileObj(tileObj.id, tileObj.x, tileObj.y, tileObj.bonus);
        } else {
          return tileObj;
        }
      });
    });
    setTiles(newState);
    return letter;
  };

  return { tiles, dropLetter, pickUpLetter };
};

export function useLetterPouch() {

  const [letterPouch, setLetterPouch] = useState(initLetters());

  const takeRandomLetters = (amount: number) => {

    if (amount > letterPouch.length) {
      amount = letterPouch.length;
    }

    const indices = new Set<number>();

    // ensure no duplicate indices
    while (indices.size < amount) {

      indices.add(Math.floor(Math.random() * letterPouch.length));
    }

    const letters = Array.from(indices).map(index => { return letterPouch[index] });

    // remove the chosen letters from the pouch
    setLetterPouch([...letterPouch.filter((_, index) => { return !indices.has(index) })]);

    return letters;
  };

  return {
    letterPouch,
    takeRandomLetters
  };
};

export function useRack(letterPouch: LetterObj[], takeRandomLetters: (amount: number) => LetterObj[]) {

  const capacity = 7;

  // infinite rerender loop if we fill the array here with takeRandomLetters(), so it's empty to begin with
  const [rack, setRack] = useState<LetterObj[]>([]);

  const setRackLetters = (letters: LetterObj[]) => {

    // set isClickable and isRacked to true
    setRack([...letters.map(letter => {
      return new LetterObj(letter.id, letter.char, letter.value, true, true, false)
    })]);
  };

  const refillRack = () => {
    const amountToDraw = capacity - rack.length;
    setRackLetters([...rack, ...takeRandomLetters(amountToDraw)]);
  };

  const exchangeLetters = (selectedLetters: [LetterObj]) => {

    // Game Rule: can only exchange letters if the pouch has > 7 left
    if (letterPouch.length <= capacity) return;

    // leave only the LetterObjs that were not in selectedLetters
    setRackLetters([...rack.filter(letterObj => {
      return selectedLetters.find(selectedLetterObj => {
        return letterObj.id !== selectedLetterObj.id
      })
    })]);
    const newLetters = takeRandomLetters(selectedLetters.length);
    setRackLetters([...rack, ...newLetters]);
  };

  return {
    rack,
    setRackLetters,
    refillRack,
    exchangeLetters
  };
};