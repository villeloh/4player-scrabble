import { initLetters } from './Init';
import { useState, MouseEvent } from 'react';

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