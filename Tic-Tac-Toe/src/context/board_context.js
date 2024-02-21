import {useContext, createContext,useState} from "react";
import {useGameContext} from "./game_context";
import delay from "../utils/delay";

const BoardContext = createContext();

const BoardProvider = ({children}) => {
  const {setIsGameOverTrue, isXTurn} = useGameContext();

  //Initial game array
  const initialBoard = Array.from({length: 9});

  //React states
  const [isReset, setIsReset] = useState(false);
  const [isBoard, setIsBoard] = useState(initialBoard);
  const [isCount, setIsCount] = useState(1);
  const [isWinner, setIsWinner] = useState({winner: "none", winRow: []});
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

  //For increasing count
  const countIncrement = async () => {
    await setIsCount((prev) => prev + 1);
  };

  //For resetting the game board
  const resetBoard = async () => {
    setIsBoard(initialBoard);
    setIsCount(1);
    await delay(800);
    setIsWinner({winner: "none", winRow: []});
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
        setIsGameOverTrue();
        setIsWinner({winner, winRow: [...isWinCond[i]]});
        return;
      }
      if (isCount >= 9) {
        setIsGameOverTrue();
        setIsWinner({winner: "tie", winRow: []});
        return;
      }
    }
  };

  return (
    <BoardContext.Provider
      value={{
        isReset,
        isBoard,
        isCount,
        isWinCond,
        countIncrement,
        resetBoard,
        setResetFalse,
        setResetTrue,
        handleBoard,
        handleResult,
        isWinner,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

const useBoardContext = () => {
  return useContext(BoardContext);
};

export {useBoardContext, BoardProvider};
