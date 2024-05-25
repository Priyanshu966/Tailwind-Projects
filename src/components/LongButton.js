const LongButton = ({setGameStart, color, text}) => {
  const colors = [
    `hover:bg-cyan-300`,
    `border-b-cyan-600`,
    `bg-cyan-500`,
    `hover:bg-yellow-300`,
    `border-b-yellow-600`,
    `bg-yellow-500`,
  ];
  return (
    <button
      onClick={setGameStart}
      className={`px-4 py-4 mt-6 text-xl font-bold tracking-wider uppercase transition-all duration-150 ease-linear bg-${color}-500 border-b-8 rounded-xl border-b-${color}-600 hover:-translate-y-1 hover:bg-${color}-300`}
    >
      {text}
      <div className="hidden">{colors[0]}</div>
    </button>
  );
};
export default LongButton;
