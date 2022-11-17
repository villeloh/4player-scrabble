import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Board from 'components/Board';
import Rack from 'components/Rack';
import Letter from 'components/Letter';
import Tile from 'components/Tile';
import { useMouseMove, useLetterPouch, useBoard, useRack } from 'utils/hooks';
import Cursor from 'components/Cursor';
import LetterObj from 'model/LetterObj';
import TileObj from 'model/TileObj';

const App: NextPage = () => {

  const pageTitle = '4-P Scrabble';

  const handleTileClick = (clickedTile: TileObj) => {

    const tileContainsLetter = clickedTile.letter !== undefined;

    // TODO: this could be improved for sure
    if (!tileContainsLetter && pickedUpLetter) {
      dropLetterOn(clickedTile, pickedUpLetter);
      setPickedUpLetter(undefined);
    } else if (tileContainsLetter && !pickedUpLetter) {
      setPickedUpLetter(pickUpLetterFrom(clickedTile));
    } else if (tileContainsLetter && pickedUpLetter) {
      const letter = clickedTile.letter;
      dropLetterOn(clickedTile, pickedUpLetter);
      setPickedUpLetter(letter);
    }
  };

  const handleRackSlotClick = (slotId: number, letterOrNull: LetterObj | null) => {

    if (pickedUpLetter) {
      addRackLetterAt(slotId, pickedUpLetter);
      setPickedUpLetter(letterOrNull || undefined);
    } else {
      const letterToPickUp = rack.get(slotId);
      setPickedUpLetter(letterToPickUp || undefined);
      removeRackLetterFrom(slotId);
    }
  };

  const { tiles, dropLetterOn, pickUpLetterFrom, getUnverifiedWordsAndPoints } = useBoard();
  const { letterPouch, takeLettersFromPouch, putLettersInPouch } = useLetterPouch();
  const { rack, removeRackLetterFrom, addRackLetterAt, refillRack, exchangeRackLetters } = useRack(letterPouch, takeLettersFromPouch, putLettersInPouch);

  const [pickedUpLetter, setPickedUpLetter] = useState<LetterObj>();
  const [justPlacedLetters, setJustPlacedLetters] = useState<LetterObj[]>([]);

  const { mouseX, mouseY, handleMouseMove } = useMouseMove();

  // browser refresh resets the letters; fix it
  useEffect(() => {
    // infinite rerender loop if we don't call this initially in useEffect()
    refillRack();
  }, []);

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board>{
        [...tiles].map(idAndTileObjArray => {
          return <Tile key={idAndTileObjArray[0]} tileObj={idAndTileObjArray[1]} handleClick={handleTileClick} />;
        })}</Board>
      <Rack handleSlotClick={handleRackSlotClick} >
        {rack}
      </Rack>
      <Cursor mouseX={mouseX} mouseY={mouseY}>
        {pickedUpLetter && <Letter letterObj={pickedUpLetter} />}
      </Cursor>
    </div>
  );
};

export default App;