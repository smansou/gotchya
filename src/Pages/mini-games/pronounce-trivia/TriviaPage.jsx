import GameBoardTrivia from "./components/GameBoardTrivia/GameBoardTrivia";
import { useState, useEffect } from "react";
import ExplanationSlide from "../../../globalSlides/explanationSlide/ExplanationSlide";
import { useNavigate } from "react-router-dom";
const TriviaPage = () => {
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [hide, setHide] = useState(false);
  const [end, setEnd] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (check3 && check4) {
      navigate("/EndGame");
    }
  });
  useEffect(() => {
    if (check && check2) {
      setHide(true);
    }
  }, [check, check2]);
  return (
    <div className="page">
      <ExplanationSlide
        hiden={hide}
        action1={setCheck}
        action2={setCheck2}
        isAbsulute={true}
        hText={
          <span>
            <h2>מה אמרתי?</h2>
            במשחק הבא תאלץ להגיד מילה בשפה שאתה לא מכיר, השותף שלך יצתרך לזהות
            את המילה שאתה אומר ולבחור אותה.
          </span>
        }
        aText="لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس"
      />
      <GameBoardTrivia isDone={setEnd} />
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
export default TriviaPage;
