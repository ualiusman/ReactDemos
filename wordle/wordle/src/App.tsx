import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Letter from './components/Letter';
import {AccuracyEnum} from './utilities/accuracy.utils';
import { Word } from './components/Word';
import { WordEntry } from './components/WordEntry';
import evaluateWordScore from './evaluation';
import { IGuess, WordBoard } from './components/WordBoard';
import { retrieveAnswer } from './utilities/answerRetriever';
import { StyledGameOverDisplay } from './App.style';
import { VirtualKeyboard } from './components/VirtualKeyboard';

function App() {

  const [wordGuess, setWordGuess] = useState('');
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [nextGuessPosition, setNextGuessPosition] = useState(0);
  const [winning, setWinning] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameGameOverText, setGameOverText] = useState('');

  const initialGuessState : IGuess[] = [
    { guessedWord: '', evaluated: false},
    { guessedWord: '', evaluated: false},
    { guessedWord: '', evaluated: false},
    { guessedWord: '', evaluated: false},
    { guessedWord: '', evaluated: false},
    { guessedWord: '', evaluated: false},

];
  const [wordGuesses, setWordGuesses] = useState<IGuess[]>(initialGuessState);



  useEffect(() =>{

    if(winning != null){
      setNextGuessPosition(0);

      setGameOver(true);
    }

    if(winning){
      setGameOverText("you Won!!");
    }
    else if( winning === false){
      setGameOverText(`Word:${retrieveAnswer().toUpperCase()}`)
    }
  },[winning]);

  useEffect(()=>{

    if(nextGuessPosition === 6){
      setWinning(false);
    }
  }, [nextGuessPosition]);

  const handleOnGuessCompletion = (guess:string) =>{

    if(wordGuess === retrieveAnswer().toUpperCase())
    {
      setWinning(true);
      return;
    }

    debugger
    setNextGuessPosition(nextGuessPosition + 1);
  }

  const handleOnClickedKey = (key:string) =>{
    if(key.toLowerCase() === 'backspace'){
      if(wordGuess.length !== 0){
        setWordGuess( wordGuess.substring(0, wordGuess.length - 1) );
      }

    }
    else if ( key.toLowerCase() === 'enter' && wordGuess.length === 5){
      handleOnGuessCompletion(wordGuess);
    }
    else{
      if(wordGuess.length < 5){
        setWordGuess(wordGuess + key);
      }
    }
  }

  const handleWordGuessCallback = (guesses: IGuess[]) =>{
    setWordGuesses(guesses);
  }

  return (


    <div className='App-div'>
      {
        gameOver? <StyledGameOverDisplay>
          {gameGameOverText}
        </StyledGameOverDisplay> : <WordEntry 
          onGuessEntered={(guess) =>{ setWordGuess(guess)}}  
          onGuessComplete={() =>{ handleOnGuessCompletion(wordGuess)}}/>
      }
      
      <WordBoard guess={wordGuess} currentPosition={nextGuessPosition} wordGuessCallback={handleWordGuessCallback} />
      <VirtualKeyboard onClickedKey={handleOnClickedKey} wordGuesses={wordGuesses} />

    </div>
  );
}

export default App;
