import { useState } from "react";
import "./WrongAnswerCard.css";

const WrongAnswerCard = ({
  answer,
  clicked,
  setClicked,
  setDisplayMessage,
  setIsCorrect,
}) => {
  const [bg, setBg] = useState("");

  const onAnswerClick = () => {
    if (clicked) return;
    setClicked(true);
    setBg("red");
    setDisplayMessage(true);
    setIsCorrect(false);
  };

  return (
    <div className={`answer-card ${bg}`} onClick={onAnswerClick}>
      {answer}
    </div>
  );
};
export default WrongAnswerCard;
