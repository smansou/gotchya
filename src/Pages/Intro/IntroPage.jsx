import "./IntroPage.css";
import { useNavigate } from "react-router-dom";
import ExplanationSlide from "../../globalSlides/explanationSlide/ExplanationSlide";
import CheckBox from "../../styled-components/CheckBox/CheckBox";
import SitingSvg from "./components/sitingSvg/sitingSvg";
import PhoneSvg from "./components/PhoneSvg/PhoneSvg";
import OpeningSlide from "./components/OpeningSlide/OpeningSlide";
import { createRef, useEffect, useState } from "react";

const IntroPage = () => {
  const [Btn1, setBtn1] = useState(false);
  const [Btn2, setBtn2] = useState(false);
  const [Btn3, setBtn3] = useState(false);
  const [Btn4, setBtn4] = useState(false);
  const exSlideRef = createRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (Btn1 && Btn2) {
      exSlideRef.current.scrollIntoView();
    }
    if (Btn3 && Btn4) {
      navigate("/memory");
    }
  });
  return (
    <div className="page" id="IntroPage">
      <div className="slide" id="FirstSlide">
        <OpeningSlide />
        <CheckBox action={setBtn1} isArabic={true} />
        <SitingSvg isArabic={true} />
        <PhoneSvg />
        <SitingSvg />
        <CheckBox action={setBtn2} />
      </div>
      <ExplanationSlide
        action1={setBtn3}
        action2={setBtn4}
        ref={exSlideRef}
        hText="ברוכים הבאים לגאצ'ה! המשחק שיעזור לך לתקשר עם אנשים מתרבויות שונות. לחץ על הכפתור על מנת לבחור משחק."
        aText="لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس"
      />
    </div>
  );
};
export default IntroPage;
