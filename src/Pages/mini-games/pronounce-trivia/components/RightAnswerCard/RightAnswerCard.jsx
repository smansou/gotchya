import { useState } from "react";
import "./RightAnswerCard.css";

const RightAnswerCard = ({
  answer,
  setCorrectAnswers,
  clicked,
  setClicked,
  setIsCorrect,
  setWordsIndex,
  setIsHebrewWord,
}) => {
  const [bg, setBg] = useState("");

  const onAnswerClick = () => {
    if (clicked) return;
    setClicked(true);
    setBg("sBC");
    setIsCorrect(true);
    setCorrectAnswers((prev) => prev + 1);
    setWordsIndex((prev) => prev + 1);
    setIsHebrewWord((prev) => !prev);
  };

  return (
    <div className={`answer-card ${bg}`} onClick={onAnswerClick}>
      <p>{answer}</p>
    </div>
  );
};
export default RightAnswerCard;
