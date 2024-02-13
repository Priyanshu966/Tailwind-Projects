import { Board,StartBox } from "./components";
import { useGlobalContext } from "./context";


function App() {
  const {isGameStarted} = useGlobalContext();

  return (
    <main className="grid w-screen h-screen font-sans bg-slate-800 place-content-center">
      {isGameStarted ? <Board/> : <StartBox/>}
    </main>
  );
}

export default App;
