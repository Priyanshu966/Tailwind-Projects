import {ImCross} from "react-icons/im";
import {BsFillRecordCircleFill} from "react-icons/bs";
import {useGlobalContext} from "../context";

const Slide = () => {
  const {isXTurn, isGameOver, isDraw, resetBoard, setResetTrue,setGameStartedFalse} =
    useGlobalContext();
  return (
    <div
      className={`${
        isGameOver ? "visible" : "invisible"
      } w-screen h-screen bg-black/50  fixed grid place-items-center`}
    >
      <div
        className={`${
          isGameOver ? "" : "-translate-x-full"
        } font-sans w-full h-64 bg-slate-800 transition-all duration-500 linear`}
      >
        <p
          className={`${
            isDraw ? "text-yellow-500" : "text-slate-400"
          }  uppercase text-center font-bold tracking-wider mt-10`}
        >
          game over!
        </p>
        <div className="flex space-x-4 mt-2 justify-center items-center uppercase">
          {isDraw ? (
            <>
              <ImCross className="text-5xl text-slate-300" />
              <h2 className="text-slate-300 text-4xl font-bold tracking-wide px-3">
                it's a draw
              </h2>
              <BsFillRecordCircleFill className="text-5xl text-slate-300" />
            </>
          ) : isXTurn ? (
            <>
              <BsFillRecordCircleFill className="text-6xl text-yellow-500" />
              <h2 className="text-yellow-500 text-4xl font-bold tracking-wide">
                takes the round
              </h2>
            </>
          ) : (
            <>
              <ImCross className="text-6xl text-cyan-400" />
              <h2 className="text-cyan-400 text-4xl font-bold tracking-wide">
                takes the round
              </h2>
            </>
          )}
        </div>
        <div className="flex items-center justify-center space-x-4 mt-6">
          <button
            onClick={() => {
              resetBoard();
              setResetTrue();
              setGameStartedFalse();
            }}
            className="bg-slate-400 rounded-xl border-b-slate-500 border-b-4 uppercase font-bold text-base tracking-wider px-4 py-3 hover:-translate-y-1 hover:bg-slate-300 transition-all duration-150 ease-linear"
          >
            quit
          </button>
          <button
            onClick={() => {
              resetBoard();
              setResetTrue();
            }}
            className="bg-yellow-500 rounded-xl border-b-yellow-600 border-b-4 uppercase font-bold text-base tracking-wider px-4 py-3 hover:-translate-y-1 hover:bg-yellow-300 transition-all duration-150 ease-linear"
          >
            next round
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slide;
