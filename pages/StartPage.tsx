import CreateGameForm from "components/CreateGameForm";
import GameList from "components/GameList";
import JoinGameForm from "components/JoinGameForm";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
  APP_TITLE, MAX_GAME_NAME_LENGTH, MAX_GAME_PW_LENGTH,
  MIN_GAME_NAME_LENGTH, MIN_GAME_PW_LENGTH
} from "utils/globals";
import { GameInfo } from "utils/types";

const StartPage: NextPage = () => {

  const pageTitle = APP_TITLE;
  const welcomeText = 'Welcome to 4-P Scrabble!';

  // TODO: fetch the game list from the server on page load & update periodically
  const [games, setGames] = useState<GameInfo[] | null>(null);
  const [selectedGame, setSelectedGame] = useState<GameInfo | null>(null);

  const joinGame = (gameName: string, passWord: string) => {

    // TODO: call server method to join game; display 'wait' modal
  };

  // the arguments have been checked for validity at this point
  const createGame = (gameName: string, passWord: string, numOfPlayers: number) => {

    // TODO: call server method to create game; display 'wait' modal
  };

  const onGameClick = (game: GameInfo) => {

    setSelectedGame(game);
  };

  // only the latest reason for invalidity will be displayed, but it's good enough
  // TODO: assign the right type to the validators somehow
  const createGameFormValidators = {

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
          <CreateGameForm onSubmit={createGame} validators={createGameFormValidators} />
        </div>
        <div>
          {selectedGame && <JoinGameForm onSubmit={joinGame} game={selectedGame} />}
          <GameList games={games} onGameClick={onGameClick} />
        </div>
      </div>
    </div>
  );
};

export default StartPage;