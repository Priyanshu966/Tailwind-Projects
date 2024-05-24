import {BsFillRecordCircleFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import {TbReload} from "react-icons/tb";
import {useGameContext} from "../context/game_context";
import {useBoardContext} from "../context/board_context";

const Info = () => {
  const {isTurn} = useGameContext();
  const {setResetTrue} = useBoardContext();

  return (
    <div className="flex items-center mb-2 space-x-5">
      <div className="flex space-x-2">
        <BsFillRecordCircleFill className="text-xl text-yellow-500" />
        <ImCross className="text-xl text-cyan-400" />
      </div>
      <div className="flex items-center justify-center w-20 h-8 font-extrabold uppercase border-b-4 rounded-md bg-slate-600 border-b-slate-950 text-slate-300 text-xs/8">
        {isTurn == "o" ? (
          <BsFillRecordCircleFill className="text-sm " />
        ) : (
          <ImCross className="text-sm" />
        )}

        <div className="ml-1.5">turn</div>
      </div>
      <div
        className="grid w-8 h-8 border-b-4 rounded-md bg-slate-400 hover:bg-slate-300 hover:-translate-y-px text-slate-950 place-items-center border-b-slate-500 "
        onClick={() => setResetTrue()}
      >
        <TbReload className="text-lg" />
      </div>
    </div>
  );
};
export default Info;
