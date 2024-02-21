import {useState} from "react";

import {useContext, createContext} from "react";

const GameContext = createContext();

const GameProvider = ({children}) => {
  const [isGameType, setIsGameType] = useState(null);
  const [isXTurn, setIsXTurn] = useState(true);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  //For changing isGameType
  const handleIsGameType = (input) =>{
    setIsGameType(input);
  }

  //For changing isGameStarted
  const setIsGameStartedTrue = () => {
    setIsGameStarted(true);
  };
  const setIsGameStartedFalse = () => {
    setIsGameStarted(false);
  };

  //For changing isGameOver
  const setIsGameOverTrue = () => {
    setIsGameOver(true);
  };
  const setIsGameOverFalse = () => {
    setIsGameOver(false);
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

  return (
    <GameContext.Provider
      value={{
        isGameType,
        isXTurn,
        isGameStarted,
        isGameOver,
        handleTurn,
        setXTurnTrue,
        setXTurnFalse,
        setIsGameStartedTrue,
        setIsGameStartedFalse,
        setIsGameOverTrue,
        setIsGameOverFalse,
        handleIsGameType
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  return useContext(GameContext);
};

export {useGameContext, GameProvider};
