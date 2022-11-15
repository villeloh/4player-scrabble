import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Board from 'components/Board';
import Rack from 'components/Rack';
import Letter from 'components/Letter';
import Tile from 'components/Tile';
import { useMouseMove, useLetterPouch, useTiles, useRack } from 'utils/hooks';
import Cursor from 'components/Cursor';
import LetterObj from 'model/LetterObj';
import TileObj from 'model/TileObj';

const App: NextPage = () => {

  const pageTitle = '4-P Scrabble';

  const handleTileClick = (clickedTile: TileObj) => {

    const tileContainsLetter = clickedTile.letter !== undefined;

    if (!tileContainsLetter && pickedUpLetter) {
      dropLetterOn(clickedTile, pickedUpLetter);
      setPickedUpLetter(undefined);
    } else if (tileContainsLetter && !pickedUpLetter) {
      setPickedUpLetter(pickUpLetterFrom(clickedTile));
    }
  };

  const handleRackedLetterClick = (letterObj: LetterObj) => {

    if (pickedUpLetter || !letterObj.isClickable) return;

    setPickedUpLetter(letterObj);
    removeRackLetter(letterObj);
  };

  const handleRackClick = () => {

    if (pickedUpLetter) {
      setRackLetters([...rack, pickedUpLetter]);
      setPickedUpLetter(undefined);
    }
  };

  const { tiles, dropLetterOn, pickUpLetterFrom } = useTiles();
  const { letterPouch, takeLettersFromPouch, putLettersInPouch } = useLetterPouch();
  const { rack, setRackLetters, removeRackLetter, refillRack, exchangeRackLetters } = useRack(letterPouch, takeLettersFromPouch, putLettersInPouch);

  const [pickedUpLetter, setPickedUpLetter] = useState<LetterObj>();
  const [boardLetters, setBoardLetters] = useState<LetterObj[]>([]);
  const [justPlacedLetters, setJustPlacedLetters] = useState<LetterObj[]>([]);

  const { mouseX, mouseY, handleMouseMove } = useMouseMove();

  // browser refresh resets the letters; fix it
  useEffect(() => {
    // infinite rerender loop if we don't call this initially in useEffect()
    const initialRack = takeLettersFromPouch(7);
    setRackLetters(initialRack);
  }, [])

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board>{tiles.map(row => {
        return row.map(tileObj => {
          return <Tile key={tileObj.id} tileObj={tileObj} handleClick={handleTileClick} />;
        });
      })}</Board>
      <Rack color={'#2e9bd5'} handleClick={handleRackClick}>{rack && rack.map(letterObj => {
        return <Letter key={letterObj.id} letterObj={letterObj} handleClick={handleRackedLetterClick} />
      })}
      </Rack>
      <Cursor mouseX={mouseX} mouseY={mouseY}>
        {pickedUpLetter && <Letter letterObj={pickedUpLetter} />}
      </Cursor>
    </div>
  )
}

export default App;