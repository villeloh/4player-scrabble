import LetterObj from "model/LetterObj";
import { useEffect, useState } from "react";

type LetterProps = {
  letterObj: LetterObj;
  handleClick?: Function;
  letterExchangeMode?: boolean;
};

export default function Letter({ letterObj, handleClick, letterExchangeMode = false }: LetterProps) {

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (!letterExchangeMode) setSelected(false);
  }, [letterExchangeMode]);

  // TODO: the click method is getting too convoluted due to prop drilling
  const handleClickAndExchangeMode = () => {

    if (letterExchangeMode) {
      setSelected(!selected);
    }
    if (letterObj.isClickable && handleClick) {
      handleClick();
    }
  };

  const selectedStyles = selected ? 'border-4 border-yellow-400' : '';

  return (
    <div className={`bg-[#d0bf7d] w-[41px] h-[45px] relative rounded-lg shadow-2xl ${selectedStyles}`} onClick={() => handleClickAndExchangeMode()}>
      <h1 className="absolute top-[15px] left-1/3 w-fit h-fit leading-3 text-lg cursor-default select-none">{letterObj.char}</h1>
      <h2 className="absolute bottom-0.5 right-0.5 text-sm cursor-default select-none">{letterObj.value}</h2>
    </div>
  );
};