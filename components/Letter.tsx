import { MouseEvent } from "react";

interface LetterProps {
  id: number,
  char: string,
  value: number,
  draggable: boolean,
  handleClick: (event: MouseEvent<HTMLDivElement>, letterId: number) => void
}

export default function Letter({ id, char, value, draggable = true, handleClick }: LetterProps) {

  const clickIfDraggable = (e: MouseEvent<HTMLDivElement>) => {

    if (draggable) handleClick(e, id);
  };

  return (
    <div className="bg-[#d0bf7d] w-[41px] h-[45px] relative rounded-lg shadow-2xl" onClick={(e) => clickIfDraggable(e)}>
      <h1 className="absolute top-[15px] left-1/3 w-fit h-fit leading-3 text-lg cursor-default">{char}</h1>
      <h2 className="absolute bottom-0.5 right-0.5 text-sm cursor-default">{value}</h2>
    </div>
  );
};