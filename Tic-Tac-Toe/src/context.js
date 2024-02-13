import {createContext, useContext} from "react";
import {useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
  //Initial game array
  const initialBoard = Array.from({length: 9});

  //React states
  const [isXTurn, setIsXTurn] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [isBoard, setIsBoard] = useState(initialBoard);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState({
    status: false,
    winner: "none",
    winRow: [],
  });
  const [isCount, setIsCount] = useState(1);
  const [isPlayerVsCpu, setIsPlayerVsCpu] = useState(false);
  const [isWinCond, setIsWinCond] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ]);
  // For starting player vs cpu game
  const setPlayerVsCpuOn = () => {
    setIsPlayerVsCpu(true);
    console.log(isPlayerVsCpu);
  };

  //For increasing count
  const countIncrement = async () => {
    await setIsCount((prev) => prev + 1);
  };

  //For changing turns
  const handleTurn = () => {
    if (isXTurn) {
      setIsXTurn(false);
    } else {
      setIsXTurn(true);
    }
  };
  const setXTurnTrue = () => {
    setIsXTurn(true);
  };
  const setXTurnFalse = () => {
    setIsXTurn(false);
  };

  //For toggling StartBox
  const setGameStartedTrue = () => {
    setIsGameStarted(true);
  };
  const setGameStartedFalse = () => {
    setIsGameStarted(false);
  };

  //For resetting the game board
  const resetBoard = () => {
    setIsBoard(initialBoard);
    setIsGameOver({status: false, winner: "none", winRow: []});
    setIsCount(0);
  };
  const setResetTrue = () => {
    setIsReset(true);
  };
  const setResetFalse = () => {
    setIsReset(false);
  };

  //For handling board array
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

  //For handling game results

  const handleResult = () => {
    console.log(isCount);
    for (let i = 0; i < isWinCond.length; i++) {
      if (
        isBoard[isWinCond[i][0]] == isBoard[isWinCond[i][1]] &&
        isBoard[isWinCond[i][1]] == isBoard[isWinCond[i][2]] &&
        isBoard[isWinCond[i][2]] != undefined
      ) {
        let winner;
        if (isXTurn) {
          winner = "x";
        } else {
          winner = "0";
        }
        setIsGameOver({
          status: true,
          winner: winner,
          winRow: [isWinCond[i][0], isWinCond[i][1], isWinCond[i][2]],
        });
        return;
      }
      if (isCount >= 9) {
        setIsGameOver({status: true, winner: "tie", winRow: []});
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        isXTurn,
        handleTurn,
        setResetTrue,
        setResetFalse,
        isReset,
        handleBoard,
        isGameOver,
        resetBoard,
        setGameStartedFalse,
        setGameStartedTrue,
        isGameStarted,
        setXTurnTrue,
        setXTurnFalse,
        isPlayerVsCpu,
        setPlayerVsCpuOn,
        countIncrement,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useGlobalContext};
