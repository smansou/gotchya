import "./Card.css";
const Card = (props) => {
  return (
    <div id="CardParent">
      <div className="front"></div>
      <div className="back">
        <p className={props.isArabic ? `arabicCard` : null}>{props.text}</p>
      </div>
    </div>
  );
};
export default Card;
