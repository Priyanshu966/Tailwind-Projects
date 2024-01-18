import {createContext, useContext} from "react";
import {useState,useEffect} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [isXTurn, setIsXTurn] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const initialBoard = Array.from({length: 9});
  const [isBoard, setIsBoard] = useState(initialBoard);
  const [isGameStarted,setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isDraw,setIsDraw] = useState(false);

  const handleTurn = () => {
    if (isXTurn) {
      setIsXTurn(false);
    } else {
      setIsXTurn(true);
    }
  };

  const setGameStartedTrue = () =>{
    setIsGameStarted(true);
    console.log("")
  }

  const setGameStartedFalse = () => {
    setIsGameStarted(false);
  };

  const resetBoard = () =>{
    setIsBoard(initialBoard);
    setIsGameOver(false);
    setIsDraw(false);
  }

  const setResetTrue = () => {
    setIsReset(true);
  };
  const setResetFalse = () => {
    setIsReset(false);
  };
  const handleBoard = (pos) => {
    let turn = "x";
    if (isXTurn) {
      turn = "x";
    } else {
      turn = "0";
    }
    isBoard[pos] = turn;
    setIsBoard(isBoard);
    handleResult();
  };

  const handleResult = () => {
    if (isBoard[0] == isBoard[1] && isBoard[1] == isBoard[2] && isBoard[0] != undefined) {
      setIsGameOver(true);
    } else if (
      isBoard[3] == isBoard[4] &&
      isBoard[4] == isBoard[5] &&
      isBoard[3] != undefined
    ) {
      setIsGameOver(true);
    } else if (
      isBoard[6] == isBoard[7] &&
      isBoard[7] == isBoard[8] &&
      isBoard[6] != undefined
    ) {
      setIsGameOver(true);
    } else if (
      isBoard[0] == isBoard[3] &&
      isBoard[3] == isBoard[6] &&
      isBoard[0] != undefined
    ) {
      setIsGameOver(true);
    } else if (
      isBoard[1] == isBoard[4] &&
      isBoard[4] == isBoard[7] &&
      isBoard[1] != undefined
    ) {
      setIsGameOver(true);
    } else if (
      isBoard[2] == isBoard[5] &&
      isBoard[5] == isBoard[8] &&
      isBoard[2] != undefined
    ) {
      setIsGameOver(true);
    } else if (
      isBoard[0] == isBoard[4] &&
      isBoard[4] == isBoard[8] &&
      isBoard[0] != undefined
    ) {
      setIsGameOver(true);
    } else if (
      isBoard[2] == isBoard[4] &&
      isBoard[4] == isBoard[6] &&
      isBoard[2] != undefined
    ) {
      setIsGameOver(true);
    }else if (
      isBoard[0] != undefined &&
      isBoard[1] != undefined &&
      isBoard[2] != undefined &&
      isBoard[3] != undefined &&
      isBoard[4] != undefined &&
      isBoard[5] != undefined &&
      isBoard[6] != undefined &&
      isBoard[7] != undefined &&
      isBoard[8] != undefined
    ) {
      setIsGameOver(true);
      setIsDraw(true);
    }
  };


  
  return (
    <AppContext.Provider
      value={{isXTurn, handleTurn, setResetTrue, setResetFalse,isReset, handleBoard,isGameOver,isDraw,resetBoard,setGameStartedFalse,setGameStartedTrue}}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useGlobalContext};
