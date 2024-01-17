import {createContext, useContext} from "react";
import {useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [isXTurn, setIsXTurn] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const initialBoard = Array.from({length: 9 });
  const [isBoard,setIsBoard] = useState(initialBoard);

  const handleTurn = () => {
    if (isXTurn) {
      setIsXTurn(false);
    } else {
      setIsXTurn(true);
    }
  };

  const setResetTrue = () => {
    setIsReset(true);
    console.log("meww")
  };
  const setResetFalse = () => {
    setIsReset(false);
  };
  const handleBoard = (pos) =>{
    let turn = "x";
    if(isXTurn){
      turn = "x";
    }else{
      turn = "0"
    }
    isBoard[pos] = turn;
    setIsBoard(isBoard);
    console.log(isBoard);

  }
  return (
    <AppContext.Provider value={{isXTurn, handleTurn,setResetTrue,setResetFalse,handleBoard}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useGlobalContext};
