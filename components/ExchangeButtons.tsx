import UIButton from "./UIButton";

type ExchangeButtonProps = {
  letterExchangeMode: boolean;
  handleActivateClick: Function;
  handleCancelClick: Function;
  handleExchangeClick: Function;
  canExchange: boolean; // if no letters are selected, disable clicking
};

export default function ExchangeButtons({
  letterExchangeMode, handleActivateClick,
  handleCancelClick, handleExchangeClick,
  canExchange }: ExchangeButtonProps) {

  const cancelBtnColor = 'bg-red-400';
  const exchangeBtnColor = 'bg-green-500';

  return (
    <div className="relative flex flex-col">
      {letterExchangeMode
        ? <div className="flex flex-col w-fit gap-2 bg-">
          <UIButton text="Exchange Selected" color={exchangeBtnColor} handleClick={handleExchangeClick} enabled={canExchange} />
          <UIButton text="Cancel" color={cancelBtnColor} handleClick={handleCancelClick} />
        </div>
        : <UIButton text="Exchange Letters" handleClick={handleActivateClick} />}
    </div>
  );
};