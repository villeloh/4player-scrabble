import Tile from 'components/Tile';

type BoardProps = {
  children: ReturnType<typeof Tile>[][];
};

export default function Board({ children }: BoardProps) {

  const columnLegendPath = '/alphabet.png';
  const rowLegendPath = '/numbers.png';

  return (
    <div className='flex flex-row items-center justify-center mt-6'>
      <img className='w-[45px] h-[750px]' src={rowLegendPath}></img>
      <div className='flex flex-col items-center h-fit w-fit'>
        <img className='w-[690px] h-[35px]' src={columnLegendPath}></img>
        <div className='grid gap-0 my-2 mx-2 border-2 border-black' style={{ gridTemplateColumns: 'repeat(15, 46px)' }}>
          {children}
        </div>
        <img className='w-[690px] h-[35px]' src={columnLegendPath}></img>
      </div>
      <img className='w-[45px] h-[750px]' src={rowLegendPath}></img>
    </div>
  );
};