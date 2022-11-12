
interface LetterProps {
  char: string,
  value: number,
  draggable: boolean
}

export default function Letter({ char, value, draggable = true }: LetterProps) {

  return (
    <div className="bg-yellow-600 w-10 h-10 relative">
      <h1 className="absolute top-1/2 left-1/2">{char}</h1>
      <h2 className="absolute bottom-1.5 right-1.5">{value}</h2>
    </div>
  );
}