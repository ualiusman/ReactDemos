import { useEffect, useState } from "react";
import { Word } from "../Word";

interface IWordBoardProps {
    guess:string,
    currentPosition:number,
    wordGuessCallback(guess: IGuess[]): void
}

export interface IGuess{
    guessedWord:string,
    evaluated: boolean
}

export const WordBoard = ({ guess, currentPosition, wordGuessCallback}: IWordBoardProps)  =>{

    const initialGuessState : IGuess[] = [
        { guessedWord: '', evaluated: false},
        { guessedWord: '', evaluated: false},
        { guessedWord: '', evaluated: false},
        { guessedWord: '', evaluated: false},
        { guessedWord: '', evaluated: false},
        { guessedWord: '', evaluated: false},

    ];

    const [wordGuesses, setWordGuesses] = useState<IGuess[]>(initialGuessState);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() =>{

        if(currentWordIndex > 5) return;

        const currentGuess: IGuess = {
            guessedWord: guess,
            evaluated: false
        }

        const updatedGuesses: IGuess[] = [
            ...wordGuesses.splice(0,currentWordIndex),
            currentGuess,
            ...wordGuesses.splice(currentWordIndex + 1)
        ];

        setWordGuesses(updatedGuesses);

    },[guess]);


    useEffect(() =>{
        debugger
        console.log("CurrentPosition:", currentPosition)

        if(currentWordIndex > 5) return;

        if(guess.length < 5) return;

        const currentGuess: IGuess = {
            guessedWord: guess,
            evaluated: true
        }

        const updatedGuesses: IGuess[] = [
            ...wordGuesses.splice(0,currentWordIndex),
            currentGuess,
            ...wordGuesses.splice(currentWordIndex + 1)
        ];

        setWordGuesses(updatedGuesses);
        setCurrentWordIndex(currentPosition);

        wordGuessCallback(updatedGuesses.filter(guess => guess.evaluated));
    },[currentPosition]);

    return (
        <div>
            {
                wordGuesses.map((wordGuess:IGuess, index: number) => {
                    console.log("wordGuess", wordGuess);
                    return  <Word key = { `guesses_${index}`}
                        isWordEvaluated = {wordGuess.evaluated}
                        guessWordValue= {wordGuess.guessedWord} />
                })
            }
        </div>
    )
}