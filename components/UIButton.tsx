import { STYLES } from "utils/globals";

type UIButtonProps = {
  text?: string;
  color?: string;
  handleClick: Function;
  enabled?: boolean;
};

export default function UIButton({ text, handleClick, color = STYLES.btnColorDefault, enabled = true }: UIButtonProps) {

  const disabledColor = STYLES.btnColorDisabled;
  const btnColor = enabled ? color : disabledColor;

  return (
    <button disabled={!enabled} className={`p-2 rounded-lg ${btnColor} w-fit`} onClick={() => handleClick()}>
      {text}
    </button>
  );
};