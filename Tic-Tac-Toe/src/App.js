import { Box,Info } from "./components";

function App() {
  return (
    <main className="h-screen bg-slate-800 grid place-content-center">
      <Info/>
      <div className='grid grid-cols-3 gap-x-2 gap-y-1.5'>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </main>
  );
}

export default App;
