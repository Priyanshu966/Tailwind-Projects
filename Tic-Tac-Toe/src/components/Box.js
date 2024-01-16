import {BsFillRecordCircleFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import { useGlobalContext } from "../context";

const Box = () => {
    const {isTurn } = useGlobalContext();
  return (
    <div className="w-16 h-16 bg-slate-600 rounded-md border-b-slate-950 border-b-4 grid place-content-center ">
      <BsFillRecordCircleFill className="text-2xl text-yellow-500 hidden" />
      <ImCross className={`text-2xl text-cyan-400 hidden`} />
    </div>
  );
};
export default Box;
