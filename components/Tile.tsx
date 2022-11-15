import Letter from 'components/Letter';
import TileObj from 'model/TileObj';

export type TileProps = {
  tileObj: TileObj;
  handleClick: Function;
};

export default function Tile({ tileObj, handleClick }: TileProps) {

  const tileImgWidth = '46px';
  const tileImgHeight = '50px';

  return (
    <div className='flex items-center justify-center' onClick={() => handleClick(tileObj)}>
      {tileObj.letter
        ? <Letter letterObj={tileObj.letter} />
        : <img src={tileObj.bonus} width={tileImgWidth} height={tileImgHeight}></img>}
    </div>
  );
};