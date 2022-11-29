import LetterObj from "model/LetterObj";
import Letter from "./Letter";

type RackProps = {
  children: Map<number, LetterObj | undefined>;
  handleSlotClick: Function;
  letterExchangeMode: boolean;
};

export default function Rack({ children, handleSlotClick, letterExchangeMode }: RackProps) {

  const rackSlots: ReturnType<typeof RackSlot>[] = [];

  children.forEach((letterObj, slotId) => {
    rackSlots.push(<RackSlot key={slotId} slotId={slotId} letterObj={letterObj} handleClick={handleSlotClick} letterExchangeMode={letterExchangeMode} />);
  });

  // TODO: rack color should match player color
  return (
    <div className="flex flex-row items-center justify-center mt-2">
      <div className="bg-sky-800 w-fit h-fit items-center justify-center rounded-md">
        <div className='m-2 flex flex-row bg-[#2e9bd5] w-[370px] h-[60px] p-2 justify-start items-center rounded-md pt-3 pb-3 space-x-2 shadow-inner'>
          {rackSlots}
        </div >
      </div>
    </div>
  );
};

type RackSlotProps = {
  slotId: number;
  letterObj: LetterObj | undefined;
  handleClick: Function;
  letterExchangeMode: boolean;
};

function RackSlot({ slotId, letterObj, handleClick, letterExchangeMode }: RackSlotProps) {

  return (
    <div className="w-[44px] h-[47px]" onClick={() => handleClick(slotId, letterObj)}>
      {letterObj && <Letter key={letterObj.id} letterObj={letterObj} letterExchangeMode={letterExchangeMode} />}
    </div>
  );
};