import GameBoardMemory from "./components/GameBoardMemory/GameBoardMemory";
import React, { useEffect, useState } from "react";
import TurnPanel from "./components/TurnPanel/TurnPanel";
import "./MemoryPage.css";
import ExplanationSlide from "../../../globalSlides/explanationSlide/ExplanationSlide";
import { useNavigate } from "react-router-dom";
const MemoryPage = () => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [hide, setHide] = useState(false);
  const [end, setEnd] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (check3 && check4) {
      navigate("/pronounce");
    }
  });
  useEffect(() => {
    if (check && check2) {
      setHide(true);
    }
  }, [check, check2]);
  return (
    <div id="MemoryPage" className="page ">
      <ExplanationSlide
        hiden={hide}
        action1={setCheck}
        action2={setCheck2}
        isAbsulute={true}
        hText="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף"
        aText="لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس"
      />
      {/* <TurnPanel isPlaying={true} /> */}
      <GameBoardMemory isDone={setEnd} />
      {/* <TurnPanel buttom={true} isPlaying={false} /> */}
      <ExplanationSlide
        show={end}
        isEnd={true}
        action1={setCheck3}
        action2={setCheck4}
        isAbsulute={true}
        hText="כל הכבוד"
        aText="لابورأس نيسي س"
      />
    </div>
  );
};
export default MemoryPage;
