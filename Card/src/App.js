import {Navbar,Main} from "./components";

function App() {
  const t = {name:"hello",title:"mewwww"};
  return (
    <>
      <Navbar />
      <Main author={t} />
    </>
  );
}

export default App;
