import {BsFillRecordCircleFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import {useGlobalContext} from "../context";
import {LongButton} from "../components"

const StartBox = () => {
  const {setGameStartedTrue, isXTurn, setXTurnTrue, setXTurnFalse} =
    useGlobalContext();
  return (
    <>
      <div className="flex justify-center items-center space-x-4 mb-5">
        <BsFillRecordCircleFill className="text-3xl text-yellow-500" />
        <ImCross className="text-3xl text-cyan-400" />
      </div>
      <div className="bg-slate-600 px-6 py-5 rounded-2xl border-b-slate-900 border-b-8 w-[28rem]">
        <p className="text-slate-300 uppercase text-center text-base font-bold tracking-wider mb-5 mt-0.5">
          pick player 1's mark
        </p>
        <div className="flex  bg-slate-800 p-2 rounded-xl">
          <div className="flex relative w-full">
            <div
              onClick={() => setXTurnFalse()}
              className="w-1/2 rounded-xl h-[54px] hover:bg-slate-700/50 transition-all duration-400 ease-linear relative"
            >
              <BsFillRecordCircleFill
                className={`${
                  isXTurn ? "text-slate-300" : "text-slate-800"
                } text-4xl text-slate-300 transition-all duration-400 ease-linear absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}
              />
            </div>
            <div
              onClick={() => setXTurnTrue()}
              className="flex justify-center items-center w-1/2 rounded-xl h-[54px] hover:bg-slate-700/50 transition-all duration-400 ease-linear relative"
            >
              <ImCross
                className={`${
                  isXTurn ? "text-slate-800" : "text-slate-300"
                } text-3xl text-slate-300 transition-all duration-400 ease-linear absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-50`}
              />
            </div>
            <div
              className={`${
                isXTurn ? "translate-x-full" : ""
              } bg-slate-300 w-1/2 h-[54px] rounded-xl absolute top-0 left-0 transition-all duration-200 ease-linear`}
            ></div>
          </div>
        </div>
        <p className="text-center text-slate-400 uppercase font-semibold mt-3">
          remember : x goes first
        </p>
      </div>
      <LongButton setGameStart={setGameStartedTrue}/>
    </>
  );
};
export default StartBox;
