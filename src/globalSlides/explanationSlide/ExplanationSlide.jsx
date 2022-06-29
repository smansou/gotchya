import "./ExplanationSlide.css";
import CheckBox from "../../styled-components/CheckBox/CheckBox";
import SpinningLogo from "../../styled-components/SpinningLogo/SpinningLogo";
import ExplanationText from "../../styled-components/ExplanationText/ExplanationText";
const ExplanationSlide = () => {
  return (
    <div id="ExplanationSlide" className="slide">
      <div className="content">
        <CheckBox isArabic={true} />
        <ExplanationText
          isArabic={true}
          text="لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس"
        />
        <ExplanationText text="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף" />
        <CheckBox />
      </div>
      <SpinningLogo />
    </div>
  );
};
export default ExplanationSlide;
