import { NextPage } from 'next';
import Head from 'next/head';
import { useState, MouseEvent, useEffect } from 'react';
import Board from 'components/Board';
import Rack from 'components/Rack';
import Letter from 'components/Letter';
import Tile from 'components/Tile';
import { useMouseMove, useLetterPouch, useTiles } from 'utils/Hooks';
import Cursor from 'components/Cursor';
import LetterObj from 'model/LetterObj';
import TileObj from 'model/TileObj';

const Game: NextPage = () => {

  const pageTitle = '4-P Scrabble';

  const handleTileClick = (clickedTile: TileObj) => {

    const tileContainsLetter = clickedTile.letter !== undefined;

    if (!tileContainsLetter && pickedUpLetter) {
      dropLetter(clickedTile, pickedUpLetter);
      setPickedUpLetter(undefined);
    } else if (tileContainsLetter && !pickedUpLetter) {
      setPickedUpLetter(pickUpLetter(clickedTile));
    }
  };

  const handleLetterClick = (e: MouseEvent<HTMLDivElement>, letterObj: LetterObj) => {

    if (pickedUpLetter || !letterObj?.draggable) return;

    // TODO: the letter state objects could be Maps rather than arrays
    setPickedUpLetter(rackLetters?.find((letter) => { return letter.id === letterObj.id; }));
    setRackLetters(rackLetters?.filter((letter) => { return letter.id !== letterObj.id }));
  };

  const handleRackClick = (e: MouseEvent<HTMLDivElement>) => {

    if (pickedUpLetter) {
      setRackLetters([...rackLetters, pickedUpLetter]);
      setPickedUpLetter(undefined);
    }
  };


  const { tiles, dropLetter, pickUpLetter } = useTiles();
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
      <Board>{tiles.map(row => {
        return row.map(tileObj => {
          return <Tile tileObj={tileObj} handleClick={handleTileClick} handleLetterClick={handleLetterClick} />;
        });
      })}</Board>
      <Rack color={'#2e9bd5'} handleClick={handleRackClick}>{rackLetters && rackLetters.map(letterObj => {
        return <Letter key={letterObj.id} letterObj={letterObj} handleClick={handleLetterClick} />
      })}
      </Rack>
      <Cursor mouseX={mouseX} mouseY={mouseY}>
        {pickedUpLetter && <Letter letterObj={pickedUpLetter} handleClick={handleLetterClick} />}
      </ Cursor>
    </div>
  )
}

export default Game;
