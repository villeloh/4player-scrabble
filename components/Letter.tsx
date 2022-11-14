import LetterObj from "model/LetterObj";
import { MouseEvent } from "react";

interface LetterProps {
  letterObj: LetterObj;
  handleClick: (event: MouseEvent<HTMLDivElement>, letterObj: LetterObj) => void;
}

export default function Letter({ letterObj, handleClick }: LetterProps) {

  const clickIfDraggable = (e: MouseEvent<HTMLDivElement>) => {

    if (letterObj.draggable) handleClick(e, letterObj);
  };

  return (
    <div className="bg-[#d0bf7d] w-[41px] h-[45px] relative rounded-lg shadow-2xl" onClick={(e) => clickIfDraggable(e)}>
      <h1 className="absolute top-[15px] left-1/3 w-fit h-fit leading-3 text-lg cursor-default">{letterObj.char}</h1>
      <h2 className="absolute bottom-0.5 right-0.5 text-sm cursor-default">{letterObj.value}</h2>
    </div>
  );
};