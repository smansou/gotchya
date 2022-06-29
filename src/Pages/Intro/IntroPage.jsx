import "./IntroPage.css";
import ExplanationSlide from "../../globalSlides/ExplanationSlide/ExplanationSlide";
import CheckBox from "../../styled-components/CheckBox/CheckBox";
import SitingSvg from "./components/sitingSvg/sitingSvg";
import PhoneSvg from "./components/PhoneSvg/PhoneSvg";

const IntroPage = () => {
  return (
    <div className="page" id="IntroPage">
      <div className="slide" id="FirstSlide">
        <CheckBox isArabic={true} />
        <SitingSvg isArabic={true} />
        <PhoneSvg />
        <SitingSvg />
        <CheckBox />
      </div>
      <ExplanationSlide />
    </div>
  );
};
export default IntroPage;
