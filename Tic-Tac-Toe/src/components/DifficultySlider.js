import {useGameContext} from "../context/game_context";

const DifficultySlider = () => {
  const {isGameType, isGameStarted, setIsGameStartedTrue} = useGameContext();
  const difficulty = ["easy", "medium", "hard", "impossible"];
  return (
    <div
      className={`${
        isGameType == "cpu" ? "visible" : "invisible"
      } w-screen h-screen bg-black/50  fixed grid place-items-center z-50`}
    >
      <div
        className={`${
          isGameType == "cpu" ? "" : "-translate-x-full"
        } font-sans w-full bg-slate-800 transition-all duration-500 linear py-11`}
      >
        <p
          className={`
            text-slate-400 text-4xl
            uppercase text-center font-bold tracking-wider mb-6`}
        >
          difficulty level
        </p>
        <div className="grid place-items-center gap-y-4">
          {difficulty.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setIsGameStartedTrue()}
                className="w-64 font-bold tracking-wider uppercase transition-all duration-150 ease-linear border-b-4 rounded-lg h-14 bg-slate-400 border-b-slate-600 hover:bg-slate-300 hover:-translate-y-1"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DifficultySlider;
