import GameBoardMemory from "./components/GameBoardMemory/GameBoardMemory";
import React, { useEffect, useState } from "react";
import TurnPanel from "./components/TurnPanel/TurnPanel";
import "./MemoryPage.css";
const MemoryPage = () => {
  const [currentPlayer, setCurrentPlayer] = useState()
  return (
    <div id="MemoryPage" className="page ">
      <TurnPanel isPlaying={true} />
      <GameBoardMemory />
      <TurnPanel buttom={true} isPlaying={false} />
    </div>
  );
};
export default MemoryPage;
