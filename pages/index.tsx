import { NextPage } from 'next';
import Head from 'next/head';
import { useState, MouseEvent, useEffect } from 'react';
import { initBoardTiles } from 'utils/Init';
import Board from 'components/Board';
import Rack from 'components/Rack';
import Letter from 'components/Letter';
import Tile from 'components/Tile';
import { useMouseMove, useLetterPouch } from 'utils/Hooks';
import Cursor from 'components/Cursor';
import LetterObj from 'model/LetterObj';

const Game: NextPage = () => {

  const pageTitle = '4-P Scrabble';

  const handleTileClick = (x: number, y: number) => {

    console.log(`clicked on Tile at: ${x},${y}`);
  };


  const handleLetterClick = (e: MouseEvent<HTMLDivElement>, letterId: number) => {

    setPickedUpLetter(rackLetters?.find((letter) => { return letter.id === letterId; }));
    setRackLetters(rackLetters?.filter((letter) => { return letter.id !== letterId }));
  };

  const handleRackClick = (e: MouseEvent<HTMLDivElement>) => {

    if (pickedUpLetter) {
      setRackLetters([...rackLetters, pickedUpLetter]);
      setPickedUpLetter(undefined);
    }
  };

  const tiles: ReturnType<typeof Tile>[][] = initBoardTiles(handleTileClick);

  const { letterPouch, takeRandomLetters } = useLetterPouch();
  const [rackLetters, setRackLetters] = useState<LetterObj[]>([]);
  const [pickedUpLetter, setPickedUpLetter] = useState<LetterObj>();
  const [boardLetters, setBoardLetters] = useState<LetterObj[]>([]);
  const [justPlacedLetters, setJustPlacedLetters] = useState<LetterObj[]>([]);

  // browser refresh resets the letters; fix it
  useEffect(() => {

    const initialRackLetters = takeRandomLetters(7);
    setRackLetters(initialRackLetters);
  }, [])

  const { mouseX, mouseY, handleMouseMove } = useMouseMove();

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board>{tiles}</Board>
      <Rack color={'#2e9bd5'} handleClick={handleRackClick}>{rackLetters && rackLetters.map(letterObj => {
        return <Letter key={letterObj.id} id={letterObj.id} char={letterObj.char} value={letterObj.value} draggable handleClick={handleLetterClick} />
      })}</Rack>
      <Cursor mouseX={mouseX} mouseY={mouseY}>{pickedUpLetter && <Letter id={pickedUpLetter.id} char={pickedUpLetter.char}
        value={pickedUpLetter.value} draggable handleClick={handleLetterClick} />}</ Cursor>
    </div>
  )
}

export default Game;
