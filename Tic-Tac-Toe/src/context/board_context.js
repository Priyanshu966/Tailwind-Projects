import {useContext, createContext, useState} from "react";
import {useGameContext} from "./game_context";
import delay from "../utils/delay";

const BoardContext = createContext();

const BoardProvider = ({children}) => {
  const {setIsGameOverTrue, isTurn, handleTurn, playerMark, changeTurn} =
    useGameContext();

  //Initial game array
  const initialBoard = Array.from({length: 9}, (_, index) => index);

  //React states
  const [isReset, setIsReset] = useState(false);
  const [isBoard, setIsBoard] = useState([...initialBoard]);
  const [isCount, setIsCount] = useState(1);
  const [isWinner, setIsWinner] = useState({winner: "none", winRow: []});
  const [emptyBoard, setEmptyBoard] = useState([...initialBoard]);

  const winCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  //For increasing count
  const countIncrement = () => {
    setIsCount((prev) => prev + 1);
  };

  //For resetting the game board
  const resetBoard = async () => {
    setIsBoard([...initialBoard]);
    setEmptyBoard([...initialBoard]);
    handleTurn(playerMark.player1);
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
    isBoard[pos] = isTurn;
    setIsBoard([...isBoard]);
    changeTurn();
    countIncrement();
    handleResult();
  };

  //For handling emptyBoard array
  const handleEmptyBoard = (arr) => {
    setEmptyBoard(arr);
  };

  //For handling game results

  const handleResult = async () => {
    for (let i = 0; i < winCond.length; i++) {
      if (
        isBoard[winCond[i][0]] == isBoard[winCond[i][1]] &&
        isBoard[winCond[i][1]] == isBoard[winCond[i][2]]
      ) {
        let winner = isBoard[winCond[i][0]];

        console.log("game over");
        setIsWinner({winner, winRow: [winCond[i][0]]});
        await delay(200);

        setIsWinner({
          winner,
          winRow: [...isWinner.winRow, winCond[i][1]],
        });
        await delay(200);

        setIsWinner({
          winner,
          winRow: [...isWinner.winRow, winCond[i][2]],
        });
        setIsGameOverTrue();
        return;
      }
    }

    // let isTie = true;
    // for (let x of isBoard) {
    //   if (typeof x == "number") {
    //     isTie = false;
    //     break;
    //   }
    // }
    // if (isTie) {
    //   setIsGameOverTrue();
    //   setIsWinner({winner: "tie", winRow: []});
    //   return;
    // }
    if (isCount == 9) {
      setIsGameOverTrue();
      setIsWinner({winner: "tie", winRow: []});
      return;
    }
  };

  return (
    <BoardContext.Provider
      value={{
        isReset,
        isBoard,
        isCount,
        winCond,
        countIncrement,
        resetBoard,
        setResetFalse,
        setResetTrue,
        handleBoard,
        handleResult,
        isWinner,
        handleEmptyBoard,
        emptyBoard,
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
