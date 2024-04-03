import {useState} from "react";

import {useContext, createContext} from "react";

const GameContext = createContext();

const GameProvider = ({children}) => {
  const [isGameType, setIsGameType] = useState(null);
  const [isTurn, setIsTurn] = useState("x");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerMark, setPlayerMark] = useState({player1: "", player2: ""});

  //For changing playerMark
  const handlePlayerMark = (player1, player2) => {
    setPlayerMark({player1,player2});
  };
  
  //For changing isGameType
  const handleIsGameType = (input) => {
    setIsGameType(input);
  };

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
  const changeTurn = () => {
    if (isTurn == "x") {
      setIsTurn("o");
    } else {
      setIsTurn("x");
    }
  };
  const handleTurn = (turn) => {
    setIsTurn(turn);
  };

  return (
    <GameContext.Provider
      value={{
        isGameType,
        isTurn,
        isGameStarted,
        isGameOver,
        handleTurn,
        changeTurn,
        setIsGameStartedTrue,
        setIsGameStartedFalse,
        setIsGameOverTrue,
        setIsGameOverFalse,
        handleIsGameType,
        handlePlayerMark,
        playerMark,
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
