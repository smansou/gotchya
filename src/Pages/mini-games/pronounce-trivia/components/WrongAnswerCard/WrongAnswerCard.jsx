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
    setTimeout(() => {
      setIsHebrewWord((prev) => !prev);
      setWordsIndex((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div className="answer-card" onClick={onAnswerClick}>
      {answer}
    </div>
  );
};
export default WrongAnswerCard;
