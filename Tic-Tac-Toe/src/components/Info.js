import {BsFillRecordCircleFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import {TbReload} from "react-icons/tb";
import { useGlobalContext } from "../context";

const Info = () => {
  const {isXTurn,setResetTrue} = useGlobalContext();

  return (
    <div className="flex items-center space-x-5 mb-2">
      <div className="flex space-x-2">
        <BsFillRecordCircleFill className="text-xl text-yellow-500" />
        <ImCross className="text-xl text-cyan-400" />
      </div>
      <div className="w-20 h-8 bg-slate-600 rounded-md border-b-slate-950 border-b-4 text-slate-300 text-xs/8 uppercase font-extrabold flex justify-center items-center">
        {!isXTurn ? <BsFillRecordCircleFill className="text-sm " /> : <ImCross className="text-sm"/>}
        
        <div className="ml-1.5">turn</div>
      </div>
      <div className="w-8 h-8 bg-slate-400 hover:bg-slate-300 hover:-translate-y-px text-slate-950 rounded-md grid place-items-center border-b-slate-500 border-b-4 " onClick={() => setResetTrue()}>
        <TbReload className="text-lg" />
      </div>
    </div>
  );
};
export default Info;
