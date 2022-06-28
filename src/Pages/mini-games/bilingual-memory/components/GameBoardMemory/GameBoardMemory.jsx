import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./GameboardMemory.css";
import { shuffleRandomly } from "../../../../../utils/utils";

const GameBoardMemory = () => {
  const [currentId, setCurrentId] = useState();
  const [hidden, setHidden] = useState("hidden");
  const [cardOpen, setCardOpen] = useState(false);

  // randomly choose 6 word objects from data to fill 12 tiles
  let arrayOfWordObjects = [];
  let i = 0;
  while (i < 6) {
    let randomIndex = Math.floor(Math.random() * myWords.length);
    arrayOfWordObjects.push(myWords[randomIndex]);
    i++;
    console.log(randomIndex)
  }

  //make array of {word & ID} pairs from hebrew and arabic and id
  let wordsArray = []
  arrayOfWordObjects.forEach((word) => {
    // console.log(word);
      wordsArray.push({ word: word.hebrew, id: word.id },
                      { word: word.arabic, id: word.id, isArabic: true })
    });

  let shuffledWords = shuffleRandomly(wordsArray);

  const drawBoard = (words) => {
    return words.map((word, i) => {
      return (
        <div key={i}>
          <Card text={word.word} id={word.id} isArabic={word.isArabic}/>
        </div>
      );
    });
  };
  const handleTileClick = (ev) => {
    if (cardOpen) {
      //do matching logic
    } else {
      //save current card to state and wait
    }
  };
  return <div className="GameBoardMemory">{drawBoard(shuffledWords)}</div>;
};
export default GameBoardMemory;

const myWords = [
  {
    hebrew: "אאאא",
    arabic: "ااااا",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id: "som id here",
  },
  {
    hebrew: "בבבב",
    arabic: "بببب",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id: "som id here",
  },
  {
    hebrew: "גגגגג",
    arabic: "ججججج",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id: "som id here",
  },
  {
    hebrew: "דדדדד",
    arabic: "ددددد",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id: "som id here",
  },
  {
    hebrew: "הההההה ",
    arabic: "هههه",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id: "som id here",
  },
  {
    hebrew: "ווווו",
    arabic: "ووووو",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id: "som id here",
  },
];
