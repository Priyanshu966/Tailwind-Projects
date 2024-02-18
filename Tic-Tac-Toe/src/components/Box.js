import {BsFillRecordCircleFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import {useGlobalContext} from "../context";
import {useRef, useEffect} from "react";
import delay from "../utils/delay";

const Box = ({pos}) => {
  const {
    isXTurn,
    handleTurn,
    setResetFalse,
    isReset,
    handleBoard,
    isGameOver,
    resetBoard,
    countIncrement,
  } = useGlobalContext();
  const boxElement = useRef();

  //For styling button when game is over
  useEffect(() => {
    if (isGameOver.status) {
      console.log(isGameOver);
      for (let x of isGameOver.winRow) {
        if (x == pos) {
          if (isGameOver.winner === "x") {
            const cross = boxElement.current.lastElementChild;

            //For adding style to the box
            boxElement.current.classList.add("box-cross");

            //For styling cross icon
            cross.classList.remove("text-cyan-400");
            cross.classList.add("text-slate-600");
          } else if (isGameOver.winner == "0") {
            const circle = boxElement.current.firstElementChild;

            //For adding style to the box
            boxElement.current.classList.add("box-circle");

            //For styling circle icon
            circle.classList.remove("text-yellow-500");
            circle.classList.add("text-slate-600");
          }
        }
      }
    }
  }, [isGameOver]);

  //For resetting the board styling when reset btn is clicked
  useEffect(() => {
    if (isReset) {
      delay(5000);
      setTimeout(() => {
        const circle = boxElement.current.firstElementChild;
        const cross = boxElement.current.lastElementChild;

        //For adding style to the box
        boxElement.current.classList.remove("box-cross");

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
      }, 200);
    }
  }, [isReset]);

  //For toggling 0 and x symbol in board
  const handleBoxAndBoard = (e) => {
    handleBox(e);
  };
  const handleBox = (e) => {
    const circle = e.currentTarget.firstElementChild;
    const cross = e.currentTarget.lastElementChild;

    if (!isXTurn && cross.classList.contains("hidden") && !isGameOver.status) {
      e.currentTarget.firstElementChild.classList.remove("hidden");
      handleTurn();
      handleBoard(pos);
      countIncrement();
    } else if (
      isXTurn &&
      circle.classList.contains("hidden") &&
      !isGameOver.status
    ) {
      e.currentTarget.lastElementChild.classList.remove("hidden");
      handleTurn();
      handleBoard(pos);
      countIncrement();
    }
  };

  return (
    <div
      ref={boxElement}
      onClick={(e) => {
        handleBoxAndBoard(e);
      }}
      className="grid w-16 h-16 border-b-4 rounded-md place-content-center group box-primary"
    >
      <BsFillRecordCircleFill className="hidden text-2xl text-yellow-500" />
      <ImCross className={`text-2xl text-cyan-400 hidden `} />
    </div>
  );
};
export default Box;
