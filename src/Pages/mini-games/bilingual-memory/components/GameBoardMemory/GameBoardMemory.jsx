import React, { useEffect, useState, useRef } from "react";
import Card from "../Card/Card";
import "./GameboardMemory.css";
import { shuffleRandomly } from "../../../../../utils/utils";

const GameBoardMemory = () => {
  const [cards, setCards] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [moves, setMoves] = useState(0);
  const timeout = useRef(null);

  useEffect(()=>{
    // randomly choose 6 word objects from data to fill 12 tiles
  let arrayOfWordObjects = [];
  let i = 0;
  while (i < 6) {
    // let randomIndex = Math.floor(Math.random() * myWords.length);
    // arrayOfWordObjects.push(myWords[randomIndex]);
    arrayOfWordObjects.push(myWords[i]);
    i++;
  }
  // make array of {word & ID} pairs from hebrew and arabic and id
  let wordsArray = []
  arrayOfWordObjects.forEach((word) => {
      wordsArray.push({ word: word.hebrew, id: word.id },
                      { word: word.arabic, id: word.id, isArabic: true })
    });
  setCards(wordsArray);
  },[])

  // Check if both the words have same id. If so, mark them inactive
  const evaluate = () => {
    const [first, second] = openCards;
    if (cards[first].id === cards[second].id) {
      setClearedCards((prev) => ({ ...prev, [cards[first].id]: true }));
      setOpenCards([]);
      //show pic of word? 
      return;
    }
    // Flip cards after a 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (index) => {
    // Have a maximum of 2 items in array at once.
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      // increase the moves once we opened a pair
      setMoves((moves) => moves + 1);
    } else {
      // If two cards are already open, we cancel timeout set for flipping cards back
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(evaluate, 500);
    }
  }, [openCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    console.log(clearedCards[card.id]);
    return Boolean(clearedCards[card.id]);
  };
  const drawBoard = (words) => {
    return words.map((word, i) => {
      return (
        <div key={i}>
          <Card
            text={word.word}
            id={word.id}
            index={i}
            isArabic={word.isArabic || ""}
            onClick={handleCardClick}
            isInactive={checkIsInactive(word)}
              isFlipped={checkIsFlipped(i)}
          />
        </div>
      );
    });
  };

  return <div className="GameBoardMemory">{drawBoard(cards)}</div>;
};
export default GameBoardMemory;

