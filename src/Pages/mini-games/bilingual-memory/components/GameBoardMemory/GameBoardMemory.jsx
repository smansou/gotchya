import React, { useEffect, useState, useRef } from "react";
import Card from "../Card/Card";
import "./GameboardMemory.css";
import { shuffleRandomly } from "../../../../../utils/utils";
import TurnPanel from "../TurnPanel/TurnPanel";
import gotchya from "../../../../../api/gotchyaApi";

const GameBoardMemory = () => {
  const [cards, setCards] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [moves, setMoves] = useState(0);
  const [pairsLeft, setPairsLeft] = useState(6);
  const [turn, setTurn] = useState(true);
  const timeout = useRef(null);
  

  useEffect(()=>{
    getWords()
    randomizeAndFill()
  },[])

  const getWords = async () => {
    let {data} =  await gotchya.get('/wordBank');
    console.log(data);
    return data;
   }

  const randomizeAndFill = async () => {
        // randomly choose 6 word objects from data to fill 12 tiles
  let arrayOfWordObjects = [];
  let i = 0;
  let rawData = await getWords();
  while (i < 6) {
    let randomIndex = Math.floor(Math.random() * rawData.length);
    arrayOfWordObjects.push(rawData[randomIndex]);
    i++;
  }
  // make array of {word & ID} pairs from hebrew and arabic and id
  let wordsArray = []
  arrayOfWordObjects.forEach((word, i) => {
      wordsArray.push({ word: word.hebrew, id: i},
                      { word: word.arabic, id: i, isArabic: true })
    });
    let shuffled = shuffleRandomly(wordsArray);
  setCards(shuffled);
  }

  // Check if both the words have same id. If so, mark them inactive
  const evaluate = () => {
    const [first, second] = openCards;
    if (cards[first].id === cards[second].id) {
      if(pairsLeft===0){
        alert('Good Job!');   // winning scenario here
        return
      }
      setPairsLeft(prev => prev-1)
      setClearedCards((prev) => ({ ...prev, [cards[first].id]: true }));
      setOpenCards([]);
    }
    // Flip cards after a 500ms 
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
      // If two cards are already open, cancel timeout set for flipping cards back
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
    setTurn(!turn);
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




  return( 
    <>
    <TurnPanel isPlaying={turn} />
  <div className="GameBoardMemory">{drawBoard(cards)}</div>
  <TurnPanel buttom={true} isPlaying={!turn} />
  </>
  )


};



export default GameBoardMemory;

