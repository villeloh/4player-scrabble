import { MouseEvent } from "react";

interface LetterProps {
  char: string,
  value: number,
  draggable: boolean,
  handleClick: (event: MouseEvent<HTMLDivElement>) => void
}

export default function Letter({ char, value, draggable = true, handleClick }: LetterProps) {

  return (
    <div className="bg-[#d0bf7d] w-[41px] h-[45px] relative rounded-lg shadow-2xl" onClick={handleClick}>
      <h1 className="absolute top-[15px] left-1/3 w-fit h-fit leading-3 text-lg">{char}</h1>
      <h2 className="absolute bottom-0.5 right-0.5 text-sm">{value}</h2>
    </div>
  );
};