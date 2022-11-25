import TileObj, { BONUS } from 'model/TileObj';

export type TileProps = {
  tileObj: TileObj;
  handleClick: Function;
};

const imgUrlMap = new Map<BONUS, string>();
imgUrlMap.set(BONUS.NONE, '/blank.jpg');
imgUrlMap.set(BONUS.LSx2, '/LSx2.jpg');
imgUrlMap.set(BONUS.LSx3, '/LSx3.jpg');
imgUrlMap.set(BONUS.WSx2, '/WSx2.jpg');
imgUrlMap.set(BONUS.WSx3, '/WSx3.jpg');
imgUrlMap.set(BONUS.CENTER, '/center_star.jpg');

export default function Tile({ tileObj, handleClick }: TileProps) {

  const tileImgWidth = '46px';
  const tileImgHeight = '50px';

  return (
    <div className='flex items-center justify-center' onClick={() => handleClick(tileObj.id)}>
      <img src={imgUrlMap.get(tileObj.bonus)} width={tileImgWidth} height={tileImgHeight}></img>
    </div>
  );
};