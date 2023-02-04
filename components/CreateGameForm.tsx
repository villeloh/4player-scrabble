import React, { useEffect, useState } from "react";
import { MAX_GAME_NAME_LENGTH, MAX_GAME_PW_LENGTH, MIN_GAME_NAME_LENGTH, MIN_GAME_PW_LENGTH, STYLES } from "utils/globals";
import Modal from "./Modal";
import UIButton from "./UIButton";

type CreateGameFormValidators = {
  isGameNameValid: (name: string) => { isValid: boolean, reasonFormInvalid?: string };
  isPasswordValid: (pw: string) => { isValid: boolean, reasonFormInvalid?: string };
};

type CreateGameFormProps = {
  onSubmit: Function;
  validators: CreateGameFormValidators;
};

// TODO: allow players to pick their own names. For now, they're auto-assigned names like 'Player 1' etc
export default function CreateGameForm({ onSubmit, validators }: CreateGameFormProps) {

  const [gameName, setGameName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [numOfPlayers, setNumOfPlayers] = useState(2);
  const { isFormValid, reasonFormInvalid } = useFormValidation(gameName, passWord, validators);

  const title = 'Create Game';
  const nameLabel = 'Enter game name (letters and numbers only):';
  const pwLabel = 'Enter password (any characters):';
  const submitLabel = 'Launch';
  const playerNumSelectLabel = '# of players:';

  const playerNumSelect = <label>
    {playerNumSelectLabel}
    <select value={numOfPlayers} onChange={(e) => setNumOfPlayers(+e.target.value)}>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
    </select>
  </label>;

  const handleGameNameChange = (e: React.FormEvent<HTMLInputElement>) => {

    // allow only letters and numbers
    setGameName(e.currentTarget.value.replace(/[^a-zA-Z\d]/ig, ""));
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {

    setPassWord(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(gameName, passWord, numOfPlayers);
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <form>
        {!isFormValid && <Modal text={reasonFormInvalid} isError={true} />}
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

const useFormValidation = (gameName: string, passWord: string, validators: CreateGameFormValidators) => {

  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [reasonFormInvalid, setReasonFormInvalid] = useState('');

  useEffect(() => {
    const validationResult = validators.isGameNameValid(gameName);
    setIsNameValid(validationResult.isValid);
    setReasonFormInvalid(validationResult.reasonFormInvalid || '');
  }, [gameName]);

  useEffect(() => {
    const validationResult = validators.isPasswordValid(passWord);
    setIsPasswordValid(validationResult.isValid);
    setReasonFormInvalid(validationResult.reasonFormInvalid || '');
  }, [passWord]);

  return {
    isFormValid: isNameValid && isPasswordValid,
    reasonFormInvalid: reasonFormInvalid
  };
};