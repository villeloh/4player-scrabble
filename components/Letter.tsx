import LetterObj from "model/LetterObj";

type LetterProps = {
  letterObj: LetterObj;
  handleClick?: Function;
};

export default function Letter({ letterObj, handleClick }: LetterProps) {

  const click = () => {

    if (letterObj.isClickable && handleClick) {
      handleClick(letterObj);
    }
  };

  return (
    <div className="bg-[#d0bf7d] w-[41px] h-[45px] relative rounded-lg shadow-2xl" onClick={() => click()}>
      <h1 className="absolute top-[15px] left-1/3 w-fit h-fit leading-3 text-lg cursor-default select-none">{letterObj.char}</h1>
      <h2 className="absolute bottom-0.5 right-0.5 text-sm cursor-default select-none">{letterObj.value}</h2>
    </div>
  );
};