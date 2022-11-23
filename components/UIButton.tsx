
type UIButtonProps = {
  text?: string;
  handleClick: Function;
};

export default function UIButton({ text, handleClick }: UIButtonProps) {

  return (
    <button className="p-2 rounded-lg bg-slate-400 w-fit" onClick={() => handleClick()}>
      {text}
    </button>
  );
};