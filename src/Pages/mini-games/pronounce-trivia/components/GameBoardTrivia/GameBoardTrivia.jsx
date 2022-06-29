import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpinningLogo from "../../../../../styled-components/SpinningLogo/SpinningLogo";
import Message from "../Message/Message";
import TriviaAnswers from "../TriviaAnswers/TriviaAnswers";
import TriviaQuestion from "../TriviaQuestion/TriviaQuestion";
import "./GameBoardTrivia.css";

export const words = [
  {
    hebrew: "בית ספר",
    arabic: "مدرسة",
    Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
    Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
    id: "1",
  },
  {
    hebrew: " שלום",
    arabic: "مدرسة",
    Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
    Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
    id: "1",
  },
  {
    hebrew: " מגבת",
    arabic: "مدرسة",
    Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
    Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
    id: "1",
  },
  {
    hebrew: " אוכל",
    arabic: "مدرسة",
    Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
    Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
    id: "1",
  },
  {
    hebrew: " סיפור",
    arabic: "مدرسة",
    Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
    Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
    id: "1",
  },
  {
    hebrew: " רצפה",
    arabic: "مدرسة",
    Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
    Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
    id: "1",
  },
  {
    hebrew: " משהו",
    arabic: "مدرسة",
    Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
    Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
    id: "1",
  },
  {
    hebrew: " עוד משהו",
    arabic: "مدرسة",
    Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
    Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
    id: "1",
  },
  {
    hebrew: " עוד עוד משהו",
    arabic: "مدرسة",
    Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
    Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
    id: "1",
  },
  {
    hebrew: " אההההההההההההההה",
    arabic: "مدرسة",
    Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
    Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
    id: "1",
  },
];

const arabicWrongAnswers = ["الأسرة", "نافورة", "شيئا ما"];
const hebrewWrongAnswers = ["1משהו", "2משהו", "3משהו"];

const GameBoardTrivia = () => {
  const [wordsIndex, setWordsIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isHebrewWord, setIsHebrewWord] = useState(true);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (wordsIndex === 9) {
      console.log(correctAnswers);
      navigate("/");
    }
  }, [wordsIndex]);

  return (
    <>
      <div className="trivia-game-board">
        <TriviaQuestion
          order={isHebrewWord ? 2 : 0}
          pos={isHebrewWord ? "" : "arabic"}
          word={
            isHebrewWord ? words[wordsIndex].hebrew : words[wordsIndex].arabic
          }
          pronun={
            isHebrewWord
              ? words[wordsIndex].Hspelling
              : words[wordsIndex].Aspelling
          }
        />

        <TriviaAnswers
          order={isHebrewWord ? 0 : 2}
          pos={isHebrewWord ? "arabic" : ""}
          rightAnswer={
            isHebrewWord ? words[wordsIndex].arabic : words[wordsIndex].hebrew
          }
          wrongAnswers={isHebrewWord ? arabicWrongAnswers : hebrewWrongAnswers}
          setWordsIndex={setWordsIndex}
          setCorrectAnswers={setCorrectAnswers}
          setIsHebrewWord={setIsHebrewWord}
          setDisplayMessage={setDisplayMessage}
          setIsCorrect={setIsCorrect}
          clicked={clicked}
          setClicked={setClicked}
        />
      </div>
      <SpinningLogo isRight={isCorrect} />
    </>
  );
};
export default GameBoardTrivia;
