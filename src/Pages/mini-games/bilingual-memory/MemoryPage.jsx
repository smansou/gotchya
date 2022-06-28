import GameBoardMemory from "./components/GameBoardMemory/GameBoardMemory";
import TurnPanel from "./components/TurnPanel/TurnPanel";
import "./MemoryPage.css";
const MemoryPage = () => {
  return (
    <div id="MemoryPage" className="page ">
      <TurnPanel isPlaying={true} />
      <GameBoardMemory />
      <TurnPanel buttom={true} isPlaying={false} />
    </div>
  );
};
export default MemoryPage;
