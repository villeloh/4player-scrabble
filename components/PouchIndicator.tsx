import LetterObj from "model/LetterObj";

type PouchIndicatorProps = {
  letterPouch: LetterObj[];
};

export default function PouchIndicator({ letterPouch }: PouchIndicatorProps) {

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
    <div className={`bg-sky-300 w-fit h-fit p-6 flex flex-row rounded-lg place-items-center`}>
      <img className="" src={imgUrl} width={pouchDims} height={pouchDims}></img>
      <h2 className="cursor-default select-none">{pouchText}</h2>
    </div>
  );
};