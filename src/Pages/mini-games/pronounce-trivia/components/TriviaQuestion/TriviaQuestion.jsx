import "./TriviaQuestion.css";

const TriviaQuestion = ({ word, pronun, order, pos }) => {
  return (
    <div className={`trivia-question ${pos}`} style={{ order: `${order}` }}>
      <div>{word}</div>
      <div>{pronun}</div>
    </div>
  );
};
export default TriviaQuestion;
