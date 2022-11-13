import { NextPage } from 'next';
import Head from 'next/head';
import { useState, MouseEvent } from 'react';
import { obtainBoardTiles } from 'utils/Init';
import Board from 'components/Board';
import Rack from 'components/Rack';
import Letter from 'components/Letter';
import Tile from 'components/Tile';
import { useMouseMove, useLetterPouch } from 'utils/Hooks';
import Cursor from 'components/Cursor';

const Game: NextPage = () => {

  const pageTitle = '4-P Scrabble';

  const onLetterDrop = (x: number, y: number) => {

    console.log(`clicked on Tile at: ${x},${y}`);
  };

  const tiles: ReturnType<typeof Tile>[][] = obtainBoardTiles(onLetterDrop);
  // const letterPouch: ReturnType<typeof Letter>[][] = useLetterPouch();





  const [pickedUpLetter, setPickedUpLetter] = useState(null);

  const handleLetterClick = (e: MouseEvent<HTMLDivElement>) => {
  };

  const [boardLetters, setBoardLetters] = useState([]);
  const [ownLetters, setOwnLetters] = useState([
    <Letter key={1} char={'A'} value={1} draggable handleClick={handleLetterClick} />,
    <Letter key={2} char={'Q'} value={10} draggable handleClick={handleLetterClick} />,
    <Letter key={3} char={'A'} value={1} handleClick={handleLetterClick} draggable />,
    <Letter key={4} char={'Q'} value={10} handleClick={handleLetterClick} draggable />,
    <Letter key={5} char={'A'} value={1} handleClick={handleLetterClick} draggable />,
    <Letter key={6} char={'Q'} value={10} handleClick={handleLetterClick} draggable />,
    <Letter key={7} char={'A'} value={1} handleClick={handleLetterClick} draggable />
  ]);

  const { mouseX, mouseY, handleMouseMove } = useMouseMove();

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board>{tiles}</Board>
      <Rack color={'#2e9bd5'}>{ownLetters}</Rack>
      <Cursor mouseX={mouseX} mouseY={mouseY}><Letter key={7} char={'A'} value={1} handleClick={handleLetterClick} draggable /></ Cursor>
    </div>
  )
}

export default Game;
