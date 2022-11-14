import { initLetters, initTiles } from './init';
import { useState, MouseEvent } from 'react';
import TileObj from 'model/TileObj';
import LetterObj from 'model/LetterObj';

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

export function useLetterPouch() {

  const [letterPouch, setLetterPouch] = useState(initLetters());

  const takeRandomLetters = (amount: number) => {

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
        if (tileObj.id === clickedTile.id) {
          letter = clickedTile.letter;
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