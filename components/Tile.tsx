import TileObj, { TileBonus } from 'model/TileObj';

export type TileProps = {
  tileObj: TileObj;
  handleClick: Function;
};

const imgUrlMap = new Map<TileBonus, string>();
imgUrlMap.set('NONE', '/blank.jpg');
imgUrlMap.set('LSx2', '/LSx2.jpg');
imgUrlMap.set('LSx3', '/LSx3.jpg');
imgUrlMap.set('WSx2', '/WSx2.jpg');
imgUrlMap.set('WSx3', '/WSx3.jpg');
imgUrlMap.set('CENTER', '/center_star.jpg');

export default function Tile({ tileObj, handleClick }: TileProps) {

  const tileImgWidth = '46px';
  const tileImgHeight = '50px';

  return (
    <div className='flex items-center justify-center' onClick={() => handleClick(tileObj.id)}>
      <img src={imgUrlMap.get(tileObj.bonus)} width={tileImgWidth} height={tileImgHeight}></img>
    </div>
  );
};