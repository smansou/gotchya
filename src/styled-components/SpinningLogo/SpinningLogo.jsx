import logo from "../../assets/svg/roundLogo.svg";
import "./SpinningLogo.css";
const SpinningLogo = () => {
  return (
    <div id="sLogoDiv">
      <img className="show" id="sLogo" src={logo} alt="" />
    </div>
  );
};
export default SpinningLogo;
