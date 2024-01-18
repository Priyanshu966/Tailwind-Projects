import {BsFillRecordCircleFill} from "react-icons/bs";
import {ImCross} from "react-icons/im";
import {FaRegDotCircle} from "react-icons/fa";
import {useGlobalContext} from "../context";
import {useRef, useEffect} from "react";

const Box = ({pos}) => {
  const {isXTurn, handleTurn, setResetFalse, isReset, handleBoard, isGameOver,resetBoard} =
    useGlobalContext();
  const boxElement = useRef();

  useEffect(() => {
    if (isReset) {
      const setTime = setTimeout(() => {
        const circle = boxElement.current.firstElementChild;
        const cross = boxElement.current.lastElementChild;

        circle.classList.add("hidden");
        cross.classList.add("hidden");
        console.log("hello");
        setResetFalse();
        resetBoard();
      }, 200);
    }
  }, [isReset]);

  const handleBoxAndBoard = (e) => {
    handleBox(e);
  };

  const handleBox = (e) => {
    const circle = e.currentTarget.firstElementChild;
    const cross = e.currentTarget.lastElementChild;

    if (!isXTurn && cross.classList.contains("hidden") && !isGameOver) {
      e.currentTarget.firstElementChild.classList.remove("hidden");
      handleTurn();
      handleBoard(pos);
    } else if (isXTurn && circle.classList.contains("hidden") && !isGameOver) {
      e.currentTarget.lastElementChild.classList.remove("hidden");
      handleTurn();
      handleBoard(pos);
    }
  };
  return (
    <div
      ref={boxElement}
      onClick={(e) => {
        handleBoxAndBoard(e);
      }}
      className="w-16 h-16 bg-slate-600 rounded-md border-b-slate-950 border-b-4 grid place-content-center group"
    >
      <BsFillRecordCircleFill className="text-2xl text-yellow-500 hidden" />

      {/* <FaRegDotCircle
        className={`text-2xl text-yellow-500 hidden ${
          isTurn == "circle" && "group-hover:block"
        }`}
      /> */}
      <ImCross className={`text-2xl text-cyan-400 hidden`} />
    </div>
  );
};
export default Box;
