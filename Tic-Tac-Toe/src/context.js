import {createContext, useContext} from "react";
import {useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [isTurn, setIsTurn] = useState("cross");
  const [isReset, setIsReset] = useState(false);

  const handleTurn = () => {
    if (isTurn == "circle") {
      setIsTurn("cross");
    } else {
      setIsTurn("circle");
    }
  };

  const setResetTrue = () => {
    setIsReset(true);
    console.log("meww")
  };
  const setResetFalse = () => {
    setIsReset(false);
  };
  return (
    <AppContext.Provider value={{isTurn, handleTurn,setResetTrue,setResetFalse}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useGlobalContext};
