import { STYLES } from "utils/globals";
import UIButton from "./UIButton";

type ExchangeButtonProps = {
  letterExchangeMode: boolean;
  handleActivateClick: Function;
  handleCancelClick: Function;
  handleExchangeClick: Function;
  canExchange: boolean; // if no letters are selected, disable clicking
  canActivate: boolean; // if pouch has < 7 letters, the button disappears
};

export default function ExchangeButtons({
  letterExchangeMode, handleActivateClick,
  handleCancelClick, handleExchangeClick,
  canExchange, canActivate }: ExchangeButtonProps) {

  const cancelBtnColor = STYLES.btnColorCancel;
  const exchangeBtnColor = STYLES.btnColorGreen;

  const exchangeBtnOrEmpty = canActivate ? <UIButton text="Exchange Letters" handleClick={handleActivateClick} /> : <div></div>;

  const exchangeBtnText = canExchange ? 'Exhange Selected' : 'Select Letters';

  return (
    <div className="relative flex flex-col">
      {letterExchangeMode
        ? <div className="flex flex-col w-fit gap-2 bg-">
          <UIButton text={exchangeBtnText} color={exchangeBtnColor} handleClick={handleExchangeClick} enabled={canExchange} />
          <UIButton text="Cancel" color={cancelBtnColor} handleClick={handleCancelClick} />
        </div>
        : exchangeBtnOrEmpty}
    </div>
  );
};