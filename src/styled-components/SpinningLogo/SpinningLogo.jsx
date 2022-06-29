import logo from "../../assets/svg/roundLogo.svg";
import "./SpinningLogo.css";
const SpinningLogo = () => {
  return (
    <div id="sLogoDiv">
      <img className="spin" id="sLogo" src={logo} alt="" />
    </div>
  );
};
export default SpinningLogo;
