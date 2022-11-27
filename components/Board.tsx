import Tile from 'components/Tile';
import LetterObj from 'model/LetterObj';
import TileObj from 'model/TileObj';
import Letter from './Letter';

type BoardProps = {
  tiles: Map<number, TileObj>;
  letters: Map<number, LetterObj>;
  handleTileClick: Function;
  handleLetterClick: Function;
  handleBlankLetterDropDown: Function;
};

export default function Board({ tiles, letters, handleTileClick, handleLetterClick, handleBlankLetterDropDown }: BoardProps) {

  const columnLegendPath = '/alphabet.png';
  const rowLegendPath = '/numbers.png';

  const boardToRender: ReturnType<typeof Letter | typeof Tile>[] = [];

  tiles.forEach((tile, id) => {
    if (letters.has(id)) {
      const letter = letters.get(id)!;
      boardToRender.push(<Letter key={letter.id} letterObj={letter} handleClick={() => handleLetterClick(id)}
        onBoard={true} handleDropDown={(selectedOption: string) => handleBlankLetterDropDown(id, selectedOption)} />);
    } else {
      boardToRender.push(<Tile key={id} tileObj={tile} handleClick={handleTileClick} />);
    }
  });

  return (
    <div className='flex flex-row items-center justify-center mt-6'>
      <img className='w-[45px] h-[750px]' src={rowLegendPath}></img>
      <div className='flex flex-col items-center h-fit w-fit'>
        <img className='w-[690px] h-[35px]' src={columnLegendPath}></img>
        <div className='grid gap-0 my-2 mx-2 border-2 border-black' style={{ gridTemplateColumns: 'repeat(15, 46px)' }}>
          {boardToRender}
        </div>
        <img className='w-[690px] h-[35px]' src={columnLegendPath}></img>
      </div>
      <img className='w-[45px] h-[750px]' src={rowLegendPath}></img>
    </div>
  );
};