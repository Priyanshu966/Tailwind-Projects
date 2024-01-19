const LongButton = ({setGameStart}) => {
  return (
    <button
      onClick={setGameStart}
      className="bg-yellow-500 mt-6 rounded-xl border-b-yellow-600 border-b-8 uppercase font-bold text-xl tracking-wider px-4 py-4 hover:-translate-y-1 hover:bg-yellow-300 transition-all duration-150 ease-linear"
    >
      new game
    </button>
  );
}
export default LongButton