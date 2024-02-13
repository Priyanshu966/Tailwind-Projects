import {ImCross} from "react-icons/im";
import {BsFillRecordCircleFill} from "react-icons/bs";
import {useGlobalContext} from "../context";

const Slide = () => {
  const {isGameOver, resetBoard, setResetTrue,setGameStartedFalse} =
    useGlobalContext();
  return (
    <div
      className={`${
        isGameOver.status ? "visible" : "invisible"
      } w-screen h-screen bg-black/50  fixed grid place-items-center`}
    >
      <div
        className={`${
          isGameOver.status ? "" : "-translate-x-full"
        } font-sans w-full h-64 bg-slate-800 transition-all duration-500 linear`}
      >
        <p
          className={`${
            isGameOver.winner == "tie" ? "text-yellow-500" : "text-slate-400"
          }  uppercase text-center font-bold tracking-wider mt-10`}
        >
          game over!
        </p>
        <div className="flex items-center justify-center mt-2 space-x-4 uppercase">
          {isGameOver.winner == "tie" ? (
            <>
              <ImCross className="text-5xl text-slate-300" />
              <h2 className="px-3 text-4xl font-bold tracking-wide text-slate-300">
                it's a draw
              </h2>
              <BsFillRecordCircleFill className="text-5xl text-slate-300" />
            </>
          ) : isGameOver.winner == "0" ? (
            <>
              <BsFillRecordCircleFill className="text-6xl text-yellow-500" />
              <h2 className="text-4xl font-bold tracking-wide text-yellow-500">
                takes the round
              </h2>
            </>
          ) : (
            <>
              <ImCross className="text-6xl text-cyan-400" />
              <h2 className="text-4xl font-bold tracking-wide text-cyan-400">
                takes the round
              </h2>
            </>
          )}
        </div>
        <div className="flex items-center justify-center mt-6 space-x-4">
          <button
            onClick={() => {
              resetBoard();
              setResetTrue();
              setGameStartedFalse();
            }}
            className="px-4 py-3 text-base font-bold tracking-wider uppercase transition-all duration-150 ease-linear border-b-4 bg-slate-400 rounded-xl border-b-slate-500 hover:-translate-y-1 hover:bg-slate-300"
          >
            quit
          </button>
          <button
            onClick={() => {
              resetBoard();
              setResetTrue();
            }}
            className="px-4 py-3 text-base font-bold tracking-wider uppercase transition-all duration-150 ease-linear bg-yellow-500 border-b-4 rounded-xl border-b-yellow-600 hover:-translate-y-1 hover:bg-yellow-300"
          >
            next round
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slide;
