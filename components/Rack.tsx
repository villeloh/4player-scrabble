import Letter from "./Letter";
import { MouseEvent } from "react";

type RackProps = {
  color: string;
  children?: ReturnType<typeof Letter>[];
  handleClick: Function
};

export default function Rack({ color, children, handleClick }: RackProps) {

  return (
    <div className="flex flex-row items-center justify-center mt-2">
      <div className="bg-sky-800 w-fit h-fit items-center justify-center rounded-md">
        <div className='m-2 flex flex-row bg-[#2e9bd5] w-[350px] h-[60px] p-2 justify-start items-center rounded-md py-2 space-x-2 shadow-inner' onClick={() => handleClick()}>
          {children}
        </div >
      </div>
    </div>
  );
};