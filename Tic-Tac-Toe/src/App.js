import { Board,StartBox } from "./components";
import { useGlobalContext } from "./context";


function App() {
  const {isGameStarted} = useGlobalContext();

  return (
    <main className="font-sans h-screen bg-slate-800 grid place-content-center">
      {isGameStarted ? <Board/> : <StartBox/>}
    </main>
  );
}

export default App;
