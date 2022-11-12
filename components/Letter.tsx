
interface LetterProps {
  char: string,
  value: number,
  draggable: boolean
}

export default function Letter({ char, value, draggable }: LetterProps) {

  return (
    <div>
      <h1>{char}</h1>
      <h2>{value}</h2>
    </div>
  );
}