import { useState } from "react";
import "./RightAnswerCard.css";

const RightAnswerCard = ({
  answer,
  setCorrectAnswers,
  clicked,
  setClicked,
  setDisplayMessage,
  setIsCorrect,
}) => {
  const [bg, setBg] = useState("");

  const onAnswerClick = () => {
    if (clicked) return;
    setClicked(true);
    setBg("green");
    setDisplayMessage(true);
    setIsCorrect(true);
    setCorrectAnswers((prev) => prev + 1);
  };

  return (
    <div className={`answer-card ${bg}`} onClick={onAnswerClick}>
      {answer}
    </div>
  );
};
export default RightAnswerCard;
