import Tile from 'components/Tile';

interface BoardProps {
  children: ReturnType<typeof Tile>[][];
}

export default function Board(props: BoardProps) {

  const columnLegendPath = '/alphabet.png';
  const rowLegendPath = '/numbers.png';

  return (
    <div className='flex flex-row items-center justify-center mt-6'>
      <div>
        <img className='h-[820px]' src={rowLegendPath}></img>
      </div>
      <div className='flex flex-col items-center h-fit w-fit'>
        <div className='w-[750px]'>
          <img src={columnLegendPath}></img>
        </div>
        <div className='grid gap-0 my-2 mx-2' style={{ gridTemplateColumns: 'repeat(15, 50px)' }}>
          {props.children}
        </div>
        <div className='w-[750px]'>
          <img src={columnLegendPath}></img>
        </div>
      </div>
      <div>
        <img className='h-[820px]' src={rowLegendPath}></img>
      </div>
    </div>
  );
}