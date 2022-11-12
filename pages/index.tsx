import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
// import TileObj, { Bonus } from 'model/TileObj';
import { obtainBoardTiles } from 'utils/Utils';
import Board from 'components/Board';

const Game: NextPage = () => {

  const pageTitle = '4-P Scrabble';

  const onLetterDrop = (x: number, y: number) => {

    console.log(`clicked on Tile at: ${x},${y}`);
  };

  const tiles = obtainBoardTiles(onLetterDrop);

  const [letters, setLetters] = useState([]);


  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board>{tiles}</Board>
    </div>
  )
}

export default Game;
