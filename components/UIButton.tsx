import { STYLES } from "utils/globals";

type UIButtonProps = {
  text?: string;
  color?: string;
  handleClick: Function;
  enabled?: boolean;
};

// Tailwind bug causes the button colors to be lost if they're imported from globals.ts -.-
export default function UIButton({ text, handleClick, color = 'bg-slate-400', enabled = true }: UIButtonProps) {

  const disabledColor = 'bg-gray-300';
  const btnColor = enabled ? color : disabledColor;

  return (
    <button disabled={!enabled} className={`p-2 rounded-lg ${btnColor} w-fit`} onClick={() => handleClick()}>
      {text}
    </button>
  );
};