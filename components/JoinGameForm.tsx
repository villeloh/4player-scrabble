import React, { useEffect, useState } from "react";
import { MAX_GAME_PW_LENGTH, MIN_GAME_PW_LENGTH, STYLES } from "utils/globals";
import { GameInfo } from "utils/types";
import UIButton from "./UIButton";

// validation will only happen when trying to join the game
type JoinGameFormProps = {
  onSubmit: (gameName: string, passWord: string) => void;
  game: GameInfo
};

export default function JoinGameForm({ onSubmit, game }: JoinGameFormProps) {

  const title = 'Join Game';
  const pwLabel = 'Enter password:';
  const submitLabel = 'Join';

  const [passWord, setPassWord] = useState('');

  let joinBtnEnabled = false;

  // does it work with a plain boolean?
  useEffect(() => {
    joinBtnEnabled = passWord.length >= MIN_GAME_PW_LENGTH && passWord.length <= MAX_GAME_PW_LENGTH && game.currentPlayers < game.maxPlayers;
  }, [passWord, game]); // not sure if the 'game' part works due to shallow vs. deep issues

  return (
    <div>
      <h1>{title}</h1>
      <form>
        <p>{game.name}</p>
        <p>{`${game.currentPlayers} / ${game.maxPlayers} players`}</p>
        <label>
          {pwLabel}
          <input type="password" name="password" placeholder={`(${MIN_GAME_PW_LENGTH}-${MAX_GAME_PW_LENGTH} characters)`} value={passWord} onChange={(e) => setPassWord(e.target.value)} maxLength={MAX_GAME_PW_LENGTH} minLength={MIN_GAME_PW_LENGTH} />
        </label>
        <UIButton text={submitLabel} color={STYLES.btnColorGreen} handleClick={() => onSubmit(game.name, passWord)} enabled={joinBtnEnabled} />
      </form>
    </div>
  );
};