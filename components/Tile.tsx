import Letter from 'components/Letter';
import TileObj from 'model/TileObj';

export type TileProps = {
  tileObj: TileObj;
  handleClick: Function;
  handleLetterClick: Function;
};

export default function Tile({ tileObj, handleClick, handleLetterClick }: TileProps) {

  return (
    <div className='flex items-center justify-center' onClick={() => handleClick(tileObj)}>
      {tileObj.letter
        ? <Letter letterObj={tileObj.letter} handleClick={() => handleLetterClick()} />
        : <img src={tileObj.bonus} width={'46px'} height={'50px'}></img>}
    </div>
  );
};