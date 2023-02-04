import Game from "model/Game";
import React, { useEffect, useState } from "react";
import { MAX_GAME_PW_LENGTH, MIN_GAME_PW_LENGTH } from "utils/globals";
import UIButton from "./UIButton";

// validation will only happen when trying to join the game
type JoinGameFormProps = {
  onSubmit: Function;
};

export default function JoinGameForm({ onSubmit, gameList }: JoinGameFormProps) {

  const pwLabel = 'Enter password:';
  const submitLabel = 'Create Game';

  return (
    <div>
      <form>
        <label>
          {nameLabel}
          <input type="text" name="name" placeholder={`(${MIN_GAME_NAME_LENGTH}-${MAX_GAME_NAME_LENGTH} characters)`} value={gameName} onChange={handleGameNameChange} maxLength={MAX_GAME_NAME_LENGTH} minLength={MIN_GAME_NAME_LENGTH} />
        </label>
        <label>
          {pwLabel}
          <input type="password" name="password" placeholder={`(${MIN_GAME_PW_LENGTH}-${MAX_GAME_PW_LENGTH} characters)`} value={passWord} onChange={handlePasswordChange} maxLength={MAX_GAME_PW_LENGTH} minLength={MIN_GAME_PW_LENGTH} />
        </label>
        {playerNumSelect}
        <UIButton text={submitLabel} color={STYLES.btnColorGreen} handleClick={handleSubmit} enabled={isFormValid} />
      </form>
    </div>
  );
};