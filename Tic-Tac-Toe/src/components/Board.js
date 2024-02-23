import {Box, Info, WinnerSlider} from "../components";

const Board = () => {
  return (
    <>
      <Info />
      <div className="grid grid-cols-3 gap-x-2 gap-y-1.5">
        <Box pos={0} />
        <Box pos={1} />
        <Box pos={2} />
        <Box pos={3} />
        <Box pos={4} />
        <Box pos={5} />
        <Box pos={6} />
        <Box pos={7} />
        <Box pos={8} />
      </div>
      <WinnerSlider />
    </>
  );
};
export default Board;
