import { useEffect, useRef } from "react";
import Letter from "./Letter";

interface CursorProps {
  children?: ReturnType<typeof Letter>,
  mouseX: number,
  mouseY: number
}

export default function Cursor({ children, mouseX, mouseY }: CursorProps) {

  // for some reason, the rendered item is off-center to start with
  const yOffset = 45;
  const xOffset = 20;

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cursorRef.current!.style.top = `${mouseY - yOffset}px`;
    cursorRef.current!.style.left = `${mouseX - xOffset}px`;
  }, [mouseX, mouseY]);

  return (
    <div ref={cursorRef} className={`absolute pointer-events-none`}>
      {children}
    </div>
  );
};