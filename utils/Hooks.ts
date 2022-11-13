import Letter from 'components/Letter';
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

  const [letters, setLetters] = useState([]);

  const takeLetter = () => {


  };

  return {
    letters
  };
};