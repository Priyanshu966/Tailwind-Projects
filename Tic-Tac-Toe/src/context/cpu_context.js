import {useContext, createContext, useState, useEffect} from "react";
import {useBoardContext} from "./board_context";
import {useGameContext} from "./game_context";
import delay from "../utils/delay";

const CpuContext = createContext();

const CpuProvider = ({children}) => {
  //useContext
  const {emptyBoard, handleBoard} = useBoardContext();
  const {isGameOver} = useGameContext();

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
  const bestSpot = () => {
    if (!probability(levels[isDifficulty])) {
      const spot = Math.floor(Math.random() * emptyBoard.length);
      return emptyBoard[spot];
    }
    //Impossible ai minimax
  };

  //For handling cpu turn
  const handleCpuTurn = async () => {
    const spot = bestSpot();
    await delay(1000);
    handleBoard(spot);
  };

  useEffect(() => {
    if (isCpuTurn) {
      handleCpuTurn();
      setIsCpuTurnFalse();
    }
  }, [isCpuTurn]);

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
