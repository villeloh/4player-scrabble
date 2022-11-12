import Letter from 'components/Letter';
import Image from 'next/image';

export enum BONUS {
  NONE = '/blank.jpg',
  WSx2 = '/WSx2.jpg', // word score x 2
  WSx3 = '/WSx3.jpg',
  LSx2 = '/LSx2.jpg', // letter score x 2
  LSx3 = '/LSx3.jpg',
  CENTER = '/center_star.jpg' // center WSx2 has a star graphic
}

export type TileProps = {
  bonus?: BONUS;
  letter?: ReturnType<typeof Letter>; // fix this bs somehow
  onLetterDrop: Function;
  x: number;
  y: number;
};

export default function Tile({ bonus = BONUS.NONE, letter, onLetterDrop, x, y }: TileProps) {

  return (
    <div className="border-black border" onClick={() => onLetterDrop(x, y)}>
      {letter
        ? letter
        : <Image src={bonus} alt={''} width={50} height={50} />}
    </div>
  );
}