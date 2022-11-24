import UIButton from "./UIButton";

type ExchangeButtonProps = {
  letterExchangeMode: boolean;
  handleActivateClick: Function;
  handleCancelClick: Function;
  handleExchangeClick: Function;
};

export default function ExchangeButtons({ letterExchangeMode, handleActivateClick, handleCancelClick, handleExchangeClick }: ExchangeButtonProps) {

  return (
    <div className="relative flex flex-col">
      {letterExchangeMode
        ? <div className="flex flex-col w-fit gap-2">
          <UIButton text="Exchange Selected" handleClick={handleExchangeClick} />
          <UIButton text="Cancel" handleClick={handleCancelClick} />
        </div>
        : <UIButton text="Exchange Mode" handleClick={handleActivateClick} />}
    </div>
  );
};