import {createContext, useContext} from "react";
import {useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [isTurn, setIsTurn] = useState("circle");

  const handleTurn = () => {
    if (isTurn == "circle") {
      setIsTurn("cross");
    } else {
      setIsTurn("circle");
    }
  };
  return (
    <AppContext.Provider value={{isTurn, handleTurn}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useGlobalContext};
