import LetterObj from "model/LetterObj";
import { useEffect, useState } from "react";
import Select, { SingleValue } from 'react-select';

type LetterProps = {
  letterObj: LetterObj;
  handleClick?: Function;
  handleDropDown?: Function;
  letterExchangeMode?: boolean;
  isOnBoard?: boolean;
};

const dropDownOptions: { value: string, label: string }[] = [{ value: 'A', label: 'A' }, { value: 'B', label: 'B' }, { value: 'C', label: 'C' }, { value: 'D', label: 'D' }, { value: 'E', label: 'E' }, { value: 'F', label: 'F' }, { value: 'G', label: 'G' }, { value: 'H', label: 'H' }, { value: 'I', label: 'I' }, { value: 'J', label: 'J' }, { value: 'K', label: 'K' }, { value: 'L', label: 'L' }, { value: 'M', label: 'M' }, { value: 'N', label: 'N' }, { value: 'O', label: 'O' }, { value: 'P', label: 'P' }, { value: 'Q', label: 'Q' }, { value: 'R', label: 'R' }, { value: 'S', label: 'S' }, { value: 'T', label: 'T' }, { value: 'U', label: 'U' }, { value: 'V', label: 'V' }, { value: 'W', label: 'W' }, { value: 'X', label: 'X' }, { value: 'Y', label: 'Y' }, { value: 'Z', label: 'Z' }];

export default function Letter({ letterObj, handleClick, handleDropDown, letterExchangeMode = false, isOnBoard = false }: LetterProps) {

  const [selectedForEx, setSelectedForEx] = useState(false);
  useEffect(() => {
    if (!letterExchangeMode) setSelectedForEx(false);
  }, [letterExchangeMode]);

  const [isBlank, setIsBlank] = useState(letterObj.char === '' && letterObj.value === 0);

  // upon dropping it on the board, a blank letter must be assigned a char
  const dropDown = <div onClick={(e) => e.stopPropagation()}>
    <Select autoFocus={true} options={dropDownOptions} defaultValue={dropDownOptions[0]}
      onChange={(newValue) => handleDropDownSelection(newValue)} menuIsOpen={isBlank} />
  </div>;

  // TODO: prop drilling is out of control with this mess
  const handleDropDownSelection = (selectedOption: SingleValue<{ value: string, label: string }>) => {
    if (!handleDropDown) return; // should not be possible

    handleDropDown(selectedOption?.value || 'A');
    setIsBlank(false); // auto-closes the dropdown
  };

  // TODO: the click method is getting too convoluted due to prop drilling
  const handleClickAndExchangeMode = () => {

    if (letterExchangeMode) {
      setSelectedForEx(!selectedForEx);
    }
    if (letterObj.isClickable && handleClick) {
      handleClick();
    }
  };

  const selectedStyles = selectedForEx ? 'border-4 border-yellow-400' : '';

  return (
    <div className={`bg-[#d0bf7d] mt-[2px] ml-[2px] w-[41px] h-[45px] relative rounded-lg shadow-2xl flex items-center justify-center ${selectedStyles}`} onClick={() => handleClickAndExchangeMode()}>
      {isBlank && isOnBoard
        ? dropDown
        : <div>
          <h1 className="absolute top-[15px] left-1/3 w-fit h-fit leading-3 text-lg cursor-default select-none">{letterObj.char}</h1>
          <h2 className="absolute bottom-0.5 right-0.5 text-sm cursor-default select-none">{letterObj.value}</h2>
        </div>
      }
    </div>
  );
};