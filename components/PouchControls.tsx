import LetterObj from "model/LetterObj";
import ExchangeButtons from "./ExchangeButtons";

type PouchControlsProps = {
  letterPouch: LetterObj[];
  letterExchangeMode: boolean;
  handleActivateClick: Function;
  handleCancelClick: Function;
  handleExchangeClick: Function;
  lettersSelected: boolean;
};

export default function PouchControls({
  letterPouch, letterExchangeMode,
  handleActivateClick, handleCancelClick,
  handleExchangeClick, lettersSelected }: PouchControlsProps) {

  const imgUrl = '/pouch.png';

  let pouchDims = '70px';
  let pouchText = '';

  if (letterPouch.length > 50) {

    pouchText = 'Letters left: > 50'
  } else if (letterPouch.length > 7) {

    pouchDims = '56px';
    pouchText = 'Letters left: 7 - 50'
  } else {
    pouchDims = '40px';
    pouchText = '< 7 letters left! Letter exchange disabled!'
  }

  return (
    <div className={`bg-sky-300 w-[200px] h-fit p-6 flex flex-col rounded-lg place-items-center`}>
      <img className="" src={imgUrl} width={pouchDims} height={pouchDims}></img>
      <h2 className="cursor-default select-none mt-2">{pouchText}</h2>
      <div className="mt-6">
        <ExchangeButtons letterExchangeMode={letterExchangeMode} handleActivateClick={handleActivateClick}
          handleCancelClick={handleCancelClick} handleExchangeClick={handleExchangeClick} canActivate={letterPouch.length > 6} canExchange={lettersSelected}
        />
      </div>
    </div>
  );
};