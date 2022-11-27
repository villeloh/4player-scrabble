
type ModalProps = {
  text: string;
  isError: boolean;
};

export default function Modal({ text, isError }: ModalProps) {

  const colorStyles = isError ? 'border-red-400 bg-red-300' : 'bg-green-300 border-green-400';

  return (
    <div className={`h-fit w-[300px] p-4 absolute top-1/3 left-1/2 rounded-lg border-4 ${colorStyles}`}>
      <p>{text}</p>
    </div>
  );
};