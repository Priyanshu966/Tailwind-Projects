import {BsFillRecordCircleFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import {useGlobalContext} from "../context";
import {useRef, useEffect} from "react";

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

  useEffect(() => {
    if (isGameOver.status) {
      console.log(pos);
    }
  }, [isGameOver]);

  //For resetting the board styling when reset btn is clicked
  useEffect(() => {
    if (isReset) {
      setTimeout(() => {
        const circle = boxElement.current.firstElementChild;
        const cross = boxElement.current.lastElementChild;

        circle.classList.add("hidden");
        cross.classList.add("hidden");
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
      className="grid w-16 h-16 border-b-4 rounded-md bg-slate-600 border-b-slate-950 place-content-center group"
    >
      <BsFillRecordCircleFill className="hidden text-2xl text-yellow-500" />
      <ImCross className={`text-2xl text-cyan-400 hidden`} />
    </div>
  );
};
export default Box;
