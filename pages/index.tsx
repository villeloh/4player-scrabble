import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Board from 'components/Board';
import Rack from 'components/Rack';
import Letter from 'components/Letter';
import { useMouseMove, useLetterPouch, useBoard, useRack } from 'utils/hooks';
import Cursor from 'components/Cursor';
import LetterObj from 'model/LetterObj';
import ExchangeButtons from 'components/ExchangeButtons';
import UIButton from 'components/UIButton';
import PouchIndicator from 'components/PouchIndicator';

const App: NextPage = () => {

  const pageTitle = '4-P Scrabble';

  const handleEmptyTileClick = (tileId: number) => {

    if (pickedUpLetter) {
      addLetterOnBoard(tileId, pickedUpLetter);
      setPickedUpLetter(undefined);
    }
  };

  const handleBoardLetterClick = (tileId: number) => {

    if (!pickedUpLetter) {
      setPickedUpLetter(takeLetterFromBoard(tileId));
    } else {
      const letter = takeLetterFromBoard(tileId);
      addLetterOnBoard(tileId, pickedUpLetter);
      setPickedUpLetter(letter);
    }
  };

  const handleRackSlotClick = (slotId: number, letter: LetterObj | undefined) => {

    if (letterExchangeMode && letter) {

      const alreadySelected = lettersToExchange.includes(letter);
      alreadySelected
        ? setLettersToExchange([...lettersToExchange.filter(letterObj => { return letterObj.id !== letter.id })]) // cancel
        : setLettersToExchange([...lettersToExchange, letter]);
    } else if (!letterExchangeMode) {
      if (pickedUpLetter) {
        addRackLetterAt(slotId, pickedUpLetter);
        setPickedUpLetter(letter);
      } else {
        const letterToPickUp = rack.get(slotId);
        setPickedUpLetter(letterToPickUp);
        removeRackLetterFrom(slotId);
      }
    }
  };

  const handleActivateLetterExchangeModeClick = () => {

    setLetterExchangeMode(true);
    reRackBoardLetters(addLettersToRack);
  };

  const handleCancelLetterExchangeModeClick = () => {

    setLettersToExchange([]);
    setLetterExchangeMode(false);
  };

  const handleLetterExchangeClick = () => {

    exchangeRackLetters(lettersToExchange);
    setLettersToExchange([]);
    setLetterExchangeMode(false);
    // TODO: pass turn
  };

  const handlePlayWordsClick = () => {

    try {
      const wordResults = getUnverifiedWordsAndPoints();
      console.log(wordResults);
      // TODO: send request to verification API
    } catch (error) {
      const err = error as Error;
      console.log(err.message);
      reRackBoardLetters(addLettersToRack);
    }
  };

  // TODO: getting a little messy here... Not sure of the best solution
  const { tiles, boardLetters, takeLetterFromBoard, addLetterOnBoard, reRackBoardLetters, getUnverifiedWordsAndPoints } = useBoard();
  const { letterPouch, takeLettersFromPouch, exchangeLettersThroughPouch } = useLetterPouch();
  const { rack, removeRackLetterFrom, addRackLetterAt, refillRack, addLettersToRack, exchangeRackLetters } = useRack(letterPouch, takeLettersFromPouch, exchangeLettersThroughPouch);

  const [pickedUpLetter, setPickedUpLetter] = useState<LetterObj>();
  const [letterExchangeMode, setLetterExchangeMode] = useState(false);
  const [lettersToExchange, setLettersToExchange] = useState<LetterObj[]>([]);

  const { mouseX, mouseY, handleMouseMove } = useMouseMove();

  // TODO: browser refresh resets the letters; fix it with LocalStorage
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
      <div className='flex flex-row justify-center'>
        <div className='mt-16 flex flex-col gap-7'>
          <PouchIndicator letterPouch={letterPouch} />
          <ExchangeButtons letterExchangeMode={letterExchangeMode} handleActivateClick={handleActivateLetterExchangeModeClick} handleCancelClick={handleCancelLetterExchangeModeClick} handleExchangeClick={handleLetterExchangeClick} />
          <UIButton text='Play Word(s)' handleClick={handlePlayWordsClick} />
        </div>
        <div>
          <Board letters={boardLetters} tiles={tiles} handleTileClick={handleEmptyTileClick} handleLetterClick={handleBoardLetterClick} />
          <Rack handleSlotClick={handleRackSlotClick} letterExchangeMode={letterExchangeMode} >
            {rack}
          </Rack>
        </div>
      </div>
      <Cursor mouseX={mouseX} mouseY={mouseY}>
        {pickedUpLetter && <Letter letterObj={pickedUpLetter} letterExchangeMode={letterExchangeMode} />}
      </Cursor>
    </div>
  );
};

export default App;