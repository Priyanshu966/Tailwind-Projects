/* eslint-disable */

import {useRef, useEffect, useCallback} from "react";
import {BsFillRecordCircleFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import outlineCross from "../assets/icon-x-outline.svg";
import outlineCircle from "../assets/icon-o-outline.svg";
import {useGameContext} from "../context/game_context";
import {useBoardContext} from "../context/board_context";
import {useCpuContext} from "../context/cpu_context";

const Box = ({pos}) => {
  const {setIsCpuTurnTrue} = useCpuContext();
  const {isTurn, isGameOver, isGameType, playerMark} = useGameContext();
  const {
    setResetFalse,
    isReset,
    handleBoard,
    resetBoard,
    isWinner,
    isBoard,
    emptyBoard,
  } = useBoardContext();
  const boxElement = useRef();

  //For styling button when game is over
  const memoized = useCallback(async () => {
    if (isWinner.winner) {
      for (let x of isWinner.winRow) {
        if (x === pos) {
          if (isWinner.winner === "cross") {
            const cross = boxElement.current.lastElementChild;

            //For adding style to the box
            boxElement.current.classList.add("box-cross");

            //For styling cross icon
            cross.classList.remove("text-cyan-400");
            cross.classList.add("text-slate-600");
          } else if (isWinner.winner === "circle") {
            const circle = boxElement.current.firstElementChild;

            //For adding style to the box
            boxElement.current.classList.add("box-circle");

            //For styling circle icon
            circle.classList.remove("text-yellow-500");
            circle.classList.add("text-slate-600");
          }
          break;
        }
      }
    }
  }, [isWinner.winRow]);

  useEffect(() => {
    memoized();
  }, [isWinner.winRow]);

  //For resetting the board styling when reset btn is clicked
  useEffect(() => {
    //For adding style to the box
    boxElement.current.classList.remove("box-cross");
    boxElement.current.classList.remove("box-circle");

    if (isReset) {
      setTimeout(() => {
        const circle = boxElement.current.firstElementChild;
        const cross = boxElement.current.lastElementChild;

        //For styling cross icon
        cross.classList.add("hidden");
        cross.classList.add("text-cyan-400");
        cross.classList.remove("text-slate-600");

        //For adding style to the box
        boxElement.current.classList.remove("box-circle");

        //For styling circle icon
        circle.classList.add("hidden");
        circle.classList.add("text-yellow-500");
        circle.classList.remove("text-slate-600");

        setResetFalse();
        resetBoard();
      }, 100);
    }
  }, [isReset]);

  //For toggling 0 and x symbol in board
  // const handleBox = (e) => {
  //   const circle = e.currentTarget.firstElementChild;
  //   const cross = e.currentTarget.lastElementChild;

  //   if (isTurn == "o" && cross.classList.contains("hidden") && !isGameOver) {
  //     e.currentTarget.firstElementChild.classList.remove("hidden");
  //     changeTurn();
  //     handleBoard(pos);
  //     countIncrement();
  //   } else if (
  //     isTurn == "x" &&
  //     circle.classList.contains("hidden") &&
  //     f!isGameOver
  //   ) {
  //     e.currentTarget.lastElementChild.classList.remove("hidden");
  //     changeTurn();
  //     handleBoard(pos);
  //     countIncrement();
  //   }
  // };

  const handleBox = () => {
    const circle = boxElement.current.firstElementChild;
    const cross = boxElement.current.lastElementChild;
    let player1Symbol;
    if (playerMark.player1 === "cross") {
      player1Symbol = "x";
    } else if (playerMark.player1 === "circle") {
      player1Symbol = "o";
    }
    if (
      isGameType === "player" ||
      (isGameType === "cpu" && player1Symbol === isTurn)
    ) {
      if (
        cross.classList.contains("hidden") &&
        circle.classList.contains("hidden") &&
        !isGameOver
      ) {
        handleBoard(pos);
      }
    }
    if (isGameType === "cpu" && !isGameOver && isTurn === player1Symbol) {
      setIsCpuTurnTrue();
    }
  };

  //For handling board symbol when board array is changed
  useEffect(() => {
    for (let i = 0; i < emptyBoard.length; i++) {
      let x = emptyBoard[i];
      if (x === pos) {
        const circle = boxElement.current.firstElementChild;
        const cross = boxElement.current.lastElementChild;
        if (isBoard[x] === "o") {
          circle.classList.remove("hidden");

          emptyBoard.splice(i, 1);
        } else if (isBoard[x] === "x") {
          cross.classList.remove("hidden");
          emptyBoard.splice(i, 1);
        }
      }
    }
  }, [isBoard]);

  //For handling hover icon
  const checkIconCond = (e) => {
    let player2Symbol;
    if (playerMark.player2 === "cross") {
      player2Symbol = "x";
    } else if (playerMark.player2 === "circle") {
      player2Symbol = "o";
    }
    let check = false;
    if (isGameType === "cpu" && isTurn === player2Symbol) {
      return (check = false);
    }
    if (e === "x") {
      check = !isGameOver && isTurn === "x" && typeof isBoard[pos] === "number";
      return check;
    } else if (e === "o") {
      check = !isGameOver && isTurn === "o" && typeof isBoard[pos] === "number";
      return check;
    }
  };

  return (
    <div
      ref={boxElement}
      onClick={() => {
        handleBox();
      }}
      className="grid w-16 h-16 transition-all duration-200 ease-out border-b-4 rounded-md place-content-center group box-primary "
    >
      <BsFillRecordCircleFill className="hidden text-2xl text-yellow-500" />
      <img
        src={outlineCircle}
        alt="circle"
        className={`${
          checkIconCond("o") ? "group-hover:block" : ""
        } hidden w-6 h-6`}
      />
      <img
        src={outlineCross}
        alt="cross"
        className={`${
          checkIconCond("x") ? "group-hover:block" : ""
        } hidden w-6 h-6`}
      />
      <ImCross className={`text-2xl text-cyan-400 hidden`} />
    </div>
  );
};
export default Box;
