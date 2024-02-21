import { Board,StartBox } from "./components";
import { useGameContext } from "./context/game_context";


function App() {
  const {isGameStarted} = useGameContext();

  return (
    <main className="grid w-screen h-screen font-sans bg-slate-800 place-content-center">
      {isGameStarted ? <Board/> : <StartBox/>}
    </main>
  );
}

export default App;
