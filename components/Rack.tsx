import Letter from "./Letter";

type RackProps = {

  color: string;
  children?: ReturnType<typeof Letter>[];
};

export default function Rack({ color, children }: RackProps) {

  return (
    <div className="flex flex-row items-center justify-center mt-2">
      <div className="bg-sky-800 w-fit h-fit items-center justify-center rounded-md">
        <div className={`m-2 flex flex-row bg-[${color}] w-[350px] h-fit p-2 justify-start items-center rounded-md py-2 space-x-2 shadow-inner`}>
          {children}
        </div >
      </div>
    </div>
  );
};