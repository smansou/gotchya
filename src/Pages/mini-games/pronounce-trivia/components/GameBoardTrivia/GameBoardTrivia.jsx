import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { arabicWords } from "../../wordsData/arabicWords.js";
import { hebrewWords } from "../../wordsData/hebrewWords";
import SpinningLogo from "../../../../../styled-components/SpinningLogo/SpinningLogo";
import Message from "../Message/Message";
import TriviaAnswers from "../TriviaAnswers/TriviaAnswers";
import TriviaQuestion from "../TriviaQuestion/TriviaQuestion";
import gotchya from "../../../../../api/gotchyaApi.js";
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
  // const [words, setWords] = useState([]);
  // const [arabicWrongAnswers, setArabicWrongAnswers] = useState([]);
  // const [hebrewWrongAnswers, setHebrewWrongAnswers] = useState([]);
  const [wordsIndex, setWordsIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isHebrewWord, setIsHebrewWord] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [spinningLogoClass, setSpinningLogoClass] = useState("spin");
  const [boardClassName, setBoardClassName] = useState("");
  const navigate = useNavigate();

  const chooseThreeWrongAnswers = (wrongAnswersList, words, lang) => {
    const chosenWords = [];
    for (let i = 0; chosenWords.length < 3; i++) {
      const rand = Math.floor(Math.random * wrongAnswersList.length);
      if (words.every((word) => word[lang] !== wrongAnswersList[rand])) {
        chosenWords.push(wrongAnswersList[rand]);
      }
    }
    return chosenWords;
  };

  const chooseEightRandomWords = (words) => {
    const indices = [];
    const randomWords = [];
    for (let i = 0; randomWords.length < 8; i++) {
      const rand = Math.floor(Math.random * words.length);
      indices.push(rand);
      if (!indices.some((index) => index === rand)) {
        randomWords.push(words[rand]);
      }
    }

    return randomWords;
  };

  // useEffect(() => {
  //   const getWords = async () => {
  //     try {
  //       const words = await gotchya.get("/wordBank");
  //       console.log(words);
  //       const randomWords = chooseTenRandomWords(words);
  //       setWords(randomWords);
  //       const heWords = chooseThreeWrongAnswers(
  //         hebrewWords,
  //         randomWords,
  //         "hebrew"
  //       );
  //       const arWords = chooseThreeWrongAnswers(
  //         arabicWords,
  //         randomWords,
  //         "arabic"
  //       );
  //       setArabicWrongAnswers(arWords);
  //       setHebrewWrongAnswers(heWords);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getWords();
  // }, []);

  useEffect(() => {
    setClicked(false);
    setBoardClassName("switchPlaces");
    setTimeout(() => {
      setBoardClassName("");
    }, 1000);

    if (wordsIndex === 7) {
      console.log(correctAnswers);
      navigate("/");
    }
  }, [wordsIndex]);

  useEffect(() => {
    if (isCorrect) setSpinningLogoClass("green");
    if (isCorrect === false) setSpinningLogoClass("red");

    setTimeout(() => {
      setSpinningLogoClass("spin");
    }, 1000);
  }, [isCorrect, wordsIndex]);

  return (
    <>
      {words.length > 0 && (
        <div className={`trivia-game-board ${boardClassName}`}>
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
            wrongAnswers={
              isHebrewWord ? arabicWrongAnswers : hebrewWrongAnswers
            }
            setWordsIndex={setWordsIndex}
            setCorrectAnswers={setCorrectAnswers}
            setIsHebrewWord={setIsHebrewWord}
            setIsCorrect={setIsCorrect}
            clicked={clicked}
            setClicked={setClicked}
          />
        </div>
      )}
      <SpinningLogo spinningLogoClass={spinningLogoClass} />
    </>
  );
};
export default GameBoardTrivia;
