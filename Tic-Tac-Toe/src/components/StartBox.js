import {BsFillRecordCircleFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import { useGlobalContext } from "../context";

const StartBox = () => {
    const {setGameStartedTrue} = useGlobalContext();
  return (
    <>
      <div>
        <BsFillRecordCircleFill className="text-xl text-yellow-500" />
        <ImCross className="text-xl text-cyan-400" />
      </div>
      <div>
        <p>pick player 1's mark</p>
        <div>
          <div>
            <BsFillRecordCircleFill className="text-xl text-yellow-500" />
          </div>
          <div>
            <ImCross className="text-xl text-cyan-400" />
          </div>
        </div>
        <p>remember : x goes first</p>
      </div>
      <button onClick={() => setGameStartedTrue()} className="bg-yellow-500 rounded-xl border-b-yellow-600 border-b-4 uppercase font-bold text-base tracking-wider px-4 py-3 hover:-translate-y-1 hover:bg-yellow-300 transition-all duration-150 ease-linear">
        new game
      </button>
    </>
  );
};
export default StartBox;
