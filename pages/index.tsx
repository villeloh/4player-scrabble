import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
// import TileObj, { Bonus } from 'model/TileObj';
import { obtainBoardTiles } from 'utils/Utils';
import Board from 'components/Board';
import Rack from 'components/Rack';
import Letter from 'components/Letter';

const Game: NextPage = () => {

  const pageTitle = '4-P Scrabble';

  const onLetterDrop = (x: number, y: number) => {

    console.log(`clicked on Tile at: ${x},${y}`);
  };

  const tiles = obtainBoardTiles(onLetterDrop);

  const [boardLetters, setBoardLetters] = useState([]);
  const [ownLetters, setOwnLetters] = useState([<Letter char={'A'} value={1} draggable />, <Letter char={'Q'} value={10} draggable />, <Letter char={'A'} value={1} draggable />, <Letter char={'Q'} value={10} draggable />, <Letter char={'A'} value={1} draggable />, <Letter char={'Q'} value={10} draggable />, <Letter char={'A'} value={1} draggable />]);


  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board>{tiles}</Board>
      <Rack color={'#2e9bd5'}>{ownLetters}</Rack>
    </div>
  )
}

export default Game;
