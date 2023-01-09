import { useEffect, useRef } from "react";
import Letter from "./Letter";

type CursorProps = {
  children?: ReturnType<typeof Letter>;
  mouseX: number;
  mouseY: number;
};

export default function Cursor({ children, mouseX, mouseY }: CursorProps) {

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cursorRef.current!.style.top = `${mouseY}px`;
    cursorRef.current!.style.left = `${mouseX}px`;
    cursorRef.current!.style.transform = 'translate(-50%, -50%)'; // center the Letter on the cursor
  }, [mouseX, mouseY]);

  return (
    <div ref={cursorRef} className={`absolute pointer-events-none`}>
      {children}
    </div>
  );
};