import {useRef, useEffect, useCallback} from "react";
import {BsFillRecordCircleFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import delay from "../utils/delay";
import {useGameContext} from "../context/game_context";
import {useBoardContext} from "../context/board_context";

const Box = ({pos}) => {
  const {isTurn, isGameOver, changeTurn} = useGameContext();
  const {
    setResetFalse,
    isReset,
    handleBoard,
    resetBoard,
    countIncrement,
    isWinner,
  } = useBoardContext();
  const boxElement = useRef();

  //For styling button when game is over
  const memoized = useCallback(async () => {
    if (isGameOver) {
      for (let x of isWinner.winRow) {
        if (x == pos) {
          if (isWinner.winner === "x") {
            const cross = boxElement.current.lastElementChild;

            //For adding style to the box
            boxElement.current.classList.add("box-cross");

            //For styling cross icon
            cross.classList.remove("text-cyan-400");
            cross.classList.add("text-slate-600");
          } else if (isWinner.winner == "o") {
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
  }, [isGameOver, isWinner]);

  useEffect(() => {
    memoized();
  }, [isGameOver, isWinner]);

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
  const handleBox = (e) => {
    const circle = e.currentTarget.firstElementChild;
    const cross = e.currentTarget.lastElementChild;

    if (isTurn == "o" && cross.classList.contains("hidden") && !isGameOver) {
      e.currentTarget.firstElementChild.classList.remove("hidden");
      changeTurn();
      handleBoard(pos);
      countIncrement();
    } else if (isTurn == "x" && circle.classList.contains("hidden") && !isGameOver) {
      e.currentTarget.lastElementChild.classList.remove("hidden");
      changeTurn();
      handleBoard(pos);
      countIncrement();
    }
  };

  return (
    <div
      ref={boxElement}
      onClick={(e) => {
        handleBox(e);
      }}
      className="grid w-16 h-16 transition-all duration-200 ease-linear border-b-4 rounded-md place-content-center group box-primary "
    >
      <BsFillRecordCircleFill className="hidden text-2xl text-yellow-500" />
      <ImCross className={`text-2xl text-cyan-400 hidden `} />
    </div>
  );
};
export default Box;
