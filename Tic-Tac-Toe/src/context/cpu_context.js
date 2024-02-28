import {useContext, createContext, useState, useEffect} from "react";
import {useBoardContext} from "./board_context";
import {useGameContext} from "./game_context";
import delay from "../utils/delay";

const CpuContext = createContext();

const CpuProvider = ({children}) => {
  //useContext
  const {emptyBoard, handleBoard, checkResult, isBoard} = useBoardContext();
  const {playerMark} = useGameContext();

  //Data
  const difficulty = ["easy", "medium", "hard", "impossible"];

  //React State
  const [isDifficulty, setIsDifficulty] = useState(null);
  const [isCpuTurn, setIsCpuTurn] = useState(false);

  //For handling isDifficulty
  const handleIsDifficulty = (value) => {
    setIsDifficulty(value);
  };

  //For handling isCpuTurn
  const setIsCpuTurnTrue = () => {
    setIsCpuTurn(true);
  };
  const setIsCpuTurnFalse = () => {
    setIsCpuTurn(false);
  };

  //Probability for getting impossible turn (1 means highest chance of getting best possible spot)
  const levels = {
    easy: -1,
    medium: 0.5,
    hard: 0.75,
    impossible: 1,
  };

  //For getting true or false(probability) for random pick or impossible pick
  const probability = (n) => {
    return Math.random() <= n;
  };

  //For finding the best spot for cpu to take
  const bestSpot = (board) => {
    if (!probability(levels[isDifficulty])) {
      const spot = Math.floor(Math.random() * emptyBoard.length);
      return emptyBoard[spot];
    }
    // Impossible ai minimax
    let bestScore = -Infinity;
    let moveIndex;

    for (let i = 0; i < board.length; i++) {
      if (typeof board[i] == "number") {
        board[i] = playerMark.player2 == "cross" ? "x" : "o";
        let score = minimax([...board], false, 1);
        board[i] = null;
        if (score > bestScore) {
          bestScore = score;
          moveIndex = i;
        }
      }
    }

    return moveIndex;
  };

  //For handling cpu turn
  const handleCpuTurn = async () => {
    const spot = bestSpot([...isBoard]);
    await delay(1000);
    handleBoard(spot);
  };

  useEffect(() => {
    if (isCpuTurn) {
      handleCpuTurn();
      setIsCpuTurnFalse();
    }
  }, [isCpuTurn]);

  const minimax = (board, isMaximizing, deph) => {
    const result = checkResult([...board]);

    if (result) return getScore(result.winner, deph);

    if (isMaximizing) {
      let bestScore = -Infinity;

      for (let i = 0; i < board.length; i++) {
        if (typeof board[i] == "number") {
          board[i] = playerMark.player2 == "cross" ? "x" : "o";
          bestScore = Math.max(minimax([...board], false, deph + 1), bestScore);
          board[i] = null;
        }
      }

      return bestScore;
    } else {
      let bestScore = Infinity;

      for (let i = 0; i < board.length; i++) {
        if (typeof board[i] == "number") {
          board[i] = playerMark.player1 == "cross" ? "x" : "o";
          bestScore = Math.min(minimax([...board], true, deph + 1), bestScore);
          board[i] = null;
        }
      }

      return bestScore;
    }
  };

  const scores = {
    cross: "cross" === playerMark.player1 ? -10 : 10,
    circle: "circle" === playerMark.player1 ? -10 : 10,
    tie: 0,
  };

  const getScore = (winner, deph) => {
    if (winner === playerMark.player1) return scores[winner] + deph;
    if (winner === playerMark.player2) return scores[winner] - deph;
    return scores[winner];
  };

  return (
    <CpuContext.Provider
      value={{
        difficulty,
        handleIsDifficulty,
        bestSpot,
        isCpuTurn,
        setIsCpuTurnTrue,
        setIsCpuTurnFalse,
        handleCpuTurn,
      }}
    >
      {children}
    </CpuContext.Provider>
  );
};

const useCpuContext = () => {
  return useContext(CpuContext);
};

export {useCpuContext, CpuProvider};
