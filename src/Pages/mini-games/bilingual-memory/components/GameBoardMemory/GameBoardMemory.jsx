import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./GameboardMemory.css";
import { shuffleRandomly } from "../../../../../utils/utils";

const GameBoardMemory = () => {
  const [currentId, setCurrentId] = useState();
  const [hidden, setHidden] = useState("hidden");
  // const [firstFlip, setFirstFlip] = useState(true);
  const [flips, setFlips] = useState(0);
  const [wordsArrayState, setWordsArrayState] = useState(0);


  // randomly choose 6 word objects from data to fill 12 tiles
  let arrayOfWordObjects = [];
  let i = 0;
  while (i < 6) {
    let randomIndex = Math.floor(Math.random() * myWords.length);
    arrayOfWordObjects.push(myWords[randomIndex]);
    i++;
  }

  //make array of {word & ID} pairs from hebrew and arabic and id
  let wordsArray = []
  arrayOfWordObjects.forEach((word) => {
      wordsArray.push({ word: word.hebrew, id: word.id },
                      { word: word.arabic, id: word.id, isArabic: true })
                    });
                    setWordsArrayState(...wordsArray)

  let shuffledWords = shuffleRandomly(wordsArray);

  const drawBoard = (words) => {
    return words.map((word, i) => {
      return (
        <div key={i}>
          <Card
           text={word.word} 
           id={word.id} 
           isArabic={word.isArabic} 
           onClick={handleTileClick}
           flips={flips}
            />
        </div>
      );
    });
  };
  const handleTileClick = (e) => {
    if (flips<2) {
      setFlips(prev => prev+1);
       setCurrentId(e);
       
      //save current card to state and wait
    } else {
        //do matching logic
        e === currentId ?  console.log('handleRightAnswer and removecards') 
        : console.log('close both cards');
        setFlips(0);
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
    id: 2,
  },
  {
    hebrew: "בבבב",
    arabic: "بببب",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id: 3,
  },
  {
    hebrew: "גגגגג",
    arabic: "ججججج",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id: 4,
  },
  {
    hebrew: "דדדדד",
    arabic: "ددددد",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id: 5,
  },
  {
    hebrew: "הההההה ",
    arabic: "هههه",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id: 6,
  },
  {
    hebrew: "ווווו",
    arabic: "ووووو",
    Hspelling: "beit sefer", // Hebrew pronounciation in english letters
    Aspelling: "madrasa", // Arabic pronounciation in english letters,
    id:7,
  },
];
