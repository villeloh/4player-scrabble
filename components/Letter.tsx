
interface LetterProps {
  char: string,
  value: number,
  draggable: boolean
}

export default function Letter({ char, value, draggable = true }: LetterProps) {

  return (
    <div className="bg-[#d0bf7d] w-[41px] h-[45px] relative rounded-lg shadow-2xl">
      <h1 className="absolute top-[15px] left-1/3 w-fit h-fit leading-3 text-lg">{char}</h1>
      <h2 className="absolute bottom-0.5 right-0.5 text-sm">{value}</h2>
    </div>
  );
}