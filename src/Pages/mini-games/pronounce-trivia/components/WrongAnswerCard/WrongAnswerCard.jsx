import "./WrongAnswerCard.css";

const WrongAnswerCard = ({
  answer,
  clicked,
  setClicked,
  setIsCorrect,
  setWordsIndex,
  setIsHebrewWord,
}) => {
  const onAnswerClick = () => {
    if (clicked) return;
    setClicked(true);
    setIsCorrect(false);
    setWordsIndex((prev) => prev + 1);
    setIsHebrewWord((prev) => !prev);
  };

  return (
    <div className="answer-card" onClick={onAnswerClick}>
      {answer}
    </div>
  );
};
export default WrongAnswerCard;
