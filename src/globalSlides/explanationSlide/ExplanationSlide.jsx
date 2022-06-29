import "./ExplanationSlide.css";
import CheckBox from "../../styled-components/CheckBox/CheckBox";
import SpinningLogo from "../../styled-components/SpinningLogo/SpinningLogo";
import ExplanationText from "../../styled-components/ExplanationText/ExplanationText";
import { forwardRef } from "react";
const ExplanationSlide = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="ExplanationSlide" className="slide">
      <div className="content">
        <CheckBox isArabic={true} action={props.action1} />
        <ExplanationText isArabic={true} text={props.aText} />
        <ExplanationText text={props.hText} />
        <CheckBox action={props.action2} />
      </div>
      <SpinningLogo />
    </div>
  );
});
export default ExplanationSlide;
