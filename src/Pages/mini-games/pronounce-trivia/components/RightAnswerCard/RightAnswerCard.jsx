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
    setTimeout(() => {
      setCorrectAnswers((prev) => prev + 1);
      setIsHebrewWord((prev) => !prev);
      setWordsIndex((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div className={`answer-card ${bg}`} onClick={onAnswerClick}>
      <p>{answer}</p>
    </div>
  );
};
export default RightAnswerCard;
