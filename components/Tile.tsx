import Letter from 'components/Letter';

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
  handleClick: Function;
  x: number;
  y: number;
};

export default function Tile({ bonus = BONUS.NONE, letter, handleClick, x, y }: TileProps) {

  return (
    <div className='flex items-center justify-center' onClick={() => handleClick(x, y)}>
      {letter
        ? letter
        : <img src={bonus} width={'46px'} height={'50px'}></img>}
    </div>
  );
};