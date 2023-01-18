import GameSetupForm from "components/GameSetupForm";
import UIButton from "components/UIButton";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { APP_TITLE, MAX_GAME_NAME_LENGTH, MAX_GAME_PW_LENGTH, MIN_GAME_NAME_LENGTH, MIN_GAME_PW_LENGTH } from "utils/globals";

const StartPage: NextPage = () => {

  const pageTitle = APP_TITLE;
  const welcomeText = 'Welcome to 4-P Scrabble!';

  const [joinBtnDirty, setJoinBtnDirty] = useState(false);
  const [createBtnDirty, setCreateBtnDirty] = useState(false);

  const [showJoinForm, setShowJoinForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const btnTextCancel = 'Cancel';
  const btnTextJoin = 'Join Game';
  const btnTextCreate = 'Create Game';

  const [joinBtnText, setJoinBtnText] = useState(btnTextJoin);
  const [createBtnText, setCreateBtnText] = useState(btnTextCreate);

  const handleCreateGameBtnClick = () => {

    // i.e., we cancel the creation by clicking 'Cancel'
    if (createBtnDirty) {

      setCreateBtnDirty(false);
      setCreateBtnText(btnTextCreate);
      setShowCreateForm(false);
    } else {
      setCreateBtnDirty(true);
      setCreateBtnText(btnTextCancel); // the 'send' button is in the form itself
      setShowCreateForm(true);
    }
  };

  const handleJoinGameBtnClick = () => {

    // i.e., we cancel the joining by clicking 'Cancel'
    if (joinBtnDirty) {

      setJoinBtnDirty(false);
      setJoinBtnText(btnTextJoin);
      setShowJoinForm(false);
    } else {
      setJoinBtnDirty(true);
      setJoinBtnText(btnTextCancel); // the 'send' button is in the form itself
      setShowJoinForm(true);
    }
  };

  // the arguments have been checked for validity at this point
  const joinGame = (gameName: string, passWord: string) => {

    // TODO: call server method to join game; display 'wait' modal
  };

  // the arguments have been checked for validity at this point
  const createGame = (gameName: string, passWord: string, numOfPlayers: number) => {

    // TODO: call server method to create game; display 'wait' modal
  };

  // only the latest reason for invalidity will be displayed, but it's good enough
  const gameFormValidators = {

    isGameNameValid(name: string) {

      let reasonFormInvalid;

      // TODO: call the server to determine if the name already exists
      const gameNameFree = true;

      // TODO: make a list of forbidden characters

      const lengthOk = name.length >= MIN_GAME_NAME_LENGTH && name.length <= MAX_GAME_NAME_LENGTH;

      if (!lengthOk) {
        reasonFormInvalid = `Error: Game Name must be ${MIN_GAME_NAME_LENGTH}-${MAX_GAME_NAME_LENGTH} characters.`;
      }

      const isValid = gameNameFree && lengthOk;

      return { isValid, reasonFormInvalid };
    },

    isPasswordValid(pw: string) {

      let reasonFormInvalid;

      // TODO: make a list of forbidden characters

      const lengthOk = pw.length >= MIN_GAME_PW_LENGTH && pw.length <= MAX_GAME_PW_LENGTH;

      if (!lengthOk) {
        reasonFormInvalid = `Error: Game Password must be ${MIN_GAME_PW_LENGTH}-${MAX_GAME_PW_LENGTH} characters.`;
      }

      const isValid = lengthOk;

      return { isValid, reasonFormInvalid };
    }
  };

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{welcomeText}</h1>
      <div className="flex flex-col">
        <div>
          <UIButton text={createBtnText} handleClick={handleCreateGameBtnClick} />
          {showCreateForm && <GameSetupForm createOrJoin="create" onSubmit={createGame} validators={gameFormValidators} />}
        </div>
        <div>
          <UIButton text={joinBtnText} handleClick={handleJoinGameBtnClick} />
          {showJoinForm && <GameSetupForm createOrJoin="join" onSubmit={joinGame} validators={gameFormValidators} />}
        </div>
      </div>
    </div>
  );
};

export default StartPage;