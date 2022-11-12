import Letter from './Letter'

type TileProps = {
  imgPath?: string;
  letter?: ReturnType<typeof Letter>; // fix this bs somehow
  onLetterDrop: Function;
  x: number;
  y: number;
}


export default function Tile({ imgPath, letter, onLetterDrop, x, y }: TileProps) {

  return (
    <div className="p-2 border-black" onClick={() => onLetterDrop(x, y)}>
      {letter
        ? letter
        : <img src={imgPath} className=""></img>}
    </div>
  );
}