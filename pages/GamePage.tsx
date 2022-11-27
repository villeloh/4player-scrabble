import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Board from 'components/Board';
import Rack from 'components/Rack';
import Letter from 'components/Letter';
import { useMouseMove, useLetterPouch, useBoard, useRack, useTimer } from 'utils/hooks';
import Cursor from 'components/Cursor';
import LetterObj from 'model/LetterObj';
import UIButton from 'components/UIButton';
import PouchControls from 'components/PouchControls';
import Modal from 'components/Modal';

const GamePage: NextPage = () => {

  const pageTitle = '4-P Scrabble';

  const handleEmptyTileClick = (tileId: number) => {

    if (pickedUpLetter) {
      addLetterOnBoard(tileId, pickedUpLetter);
      setPickedUpLetter(undefined);
    }
  };

  const handleBoardLetterClick = (tileId: number) => {
    // disable dropping a blank letter on another one
    // (the logic gets too convoluted)
    if (pickedUpLetter?.char === '') return;

    if (!pickedUpLetter) {
      setPickedUpLetter(takeLetterFromBoard(tileId));
    } else {
      const letter = takeLetterFromBoard(tileId);
      addLetterOnBoard(tileId, pickedUpLetter);
      setPickedUpLetter(letter);
    }
  };

  // TODO: prop drilling obfuscates the logic here
  // TODO: possibly move this logic to the (already bloated) useBoard() hook
  const handleBlankLetterCharSelect = (tileId: number, selectedChar: string) => {

    const blankLetter = boardLetters.get(tileId)!;
    const newLetter = new LetterObj(blankLetter?.id, selectedChar, 0, true);
    addLetterOnBoard(tileId, newLetter); // replaces the old one
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
    if (pickedUpLetter) return;

    setLetterExchangeMode(true);
    reRackBoardLetters(addLettersToRack);
  };

  const handleCancelLetterExchangeModeClick = () => {

    setLettersToExchange([]);
    setLetterExchangeMode(false);
  };

  const handleLetterExchangeClick = () => {
    if (pickedUpLetter) return;

    exchangeRackLetters(lettersToExchange);
    setLettersToExchange([]);
    setLetterExchangeMode(false);
    // TODO: pass turn
  };

  const handlePlayWordsClick = () => {
    if (pickedUpLetter) return;

    let msgToDisplay: string | undefined;
    let isError = false;

    try {
      const { words, points } = getUnverifiedWordsAndPoints();
      console.log(words);
      console.log('points: ', points);

      // TODO: send request to verification API
      // TODO: lock board letters only upon API verif. success
      lockBoardLetters();

      msgToDisplay = `Played words: ${words.join(', ')} ! Points: +${points} !`;
      // TODO: draw new letters from pouch and pass turn on verif. success
      // TODO: increase player's score
      // TODO: check for victory

      // TODO: rerack letters and pass turn on verif. failure
      // TODO: rerack blank letters with their selected value upon verif. failure
      // (set letter.isCharLocked = true for this)

    } catch (error) {
      const err = error as Error;
      console.log(err.message);
      reRackBoardLetters(addLettersToRack);

      msgToDisplay = err.message;
      isError = true;
    }
    if (msgToDisplay) {
      displayModal(msgToDisplay, 3000, isError);
    }
  };

  const displayModal = (text: string, durationMS: number, isError: boolean = false) => {

    setModalData({ text, isError });
    setModalVisible(true);
    useTimer(durationMS, () => { setModalVisible(false); console.log(modalVisible); })();
  };

  const [modalData, setModalData] = useState({ text: '', isError: false });
  const [modalVisible, setModalVisible] = useState(false);

  // TODO: getting a little messy here... Not sure of the best solution
  const { tiles, boardLetters, lettersOnBoard, takeLetterFromBoard, addLetterOnBoard, lockBoardLetters, reRackBoardLetters, getUnverifiedWordsAndPoints } = useBoard();
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

  // TODO: prop drilling is getting out of control (PouchControls has 3 levels)
  return (
    <div onMouseMove={handleMouseMove} className="relative">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-row justify-center'>
        <div className='mt-16 flex flex-col gap-7'>
          <PouchControls letterPouch={letterPouch} letterExchangeMode={letterExchangeMode}
            handleActivateClick={handleActivateLetterExchangeModeClick}
            handleCancelClick={handleCancelLetterExchangeModeClick}
            handleExchangeClick={handleLetterExchangeClick}
            lettersSelected={lettersToExchange.length > 0}
          />
          <UIButton text='Play Word(s)' handleClick={handlePlayWordsClick} enabled={lettersOnBoard} />
        </div>
        <div>
          <Board letters={boardLetters} tiles={tiles} handleTileClick={handleEmptyTileClick} handleLetterClick={handleBoardLetterClick} handleBlankLetterDropDown={handleBlankLetterCharSelect} />
          <Rack handleSlotClick={handleRackSlotClick} letterExchangeMode={letterExchangeMode} >
            {rack}
          </Rack>
        </div>
      </div>
      <Cursor mouseX={mouseX} mouseY={mouseY}>
        {pickedUpLetter && <Letter letterObj={pickedUpLetter} letterExchangeMode={letterExchangeMode} />}
      </Cursor>
      {modalVisible && <Modal {...modalData} />}
    </div>
  );
};

export default GamePage;