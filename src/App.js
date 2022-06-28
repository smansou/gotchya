import "./App.css";
import "./global-style/global.css";
import "./global-style/fonts.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./Pages/Intro/IntroPage";
import MemoryPage from "./Pages/mini-games/bilingual-memory/MemoryPage";
import TriviaPage from "./Pages/mini-games/pronounce-trivia/TriviaPage";
import LeaderBoard from "./Pages/Leader/LeaderPage";
function App() {
  return (
    <div
      className="App"
      style={{ height: window.innerHeight, width: window.innerWidth }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/memory" element={<MemoryPage />} />
          <Route path="/pronounce" element={<TriviaPage />} />
          <Route path="/leaderBoard" element={<LeaderBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
