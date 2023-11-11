import { useEffect, useState } from "react"
import Letter from "../Letter";
import { AccuracyEnum } from "../../utilities/accuracy.utils";
import evaluateWordScore from "../../evaluation";
import { retrieveAnswer } from "../../utilities/answerRetriever";

interface IWordProps{
    isWordEvaluated: boolean,
    guessWordValue: string
}

export const Word = ({isWordEvaluated, guessWordValue}: IWordProps) =>{

    const initialAccuracyArray = [
        AccuracyEnum.none,
        AccuracyEnum.none,
        AccuracyEnum.none,
        AccuracyEnum.none,
        AccuracyEnum.none,

    ];

    const [evaluatedResults, setEvaluatedResults] = useState<AccuracyEnum[]>(initialAccuracyArray);
    const [isEvaluated, setIsEvaluated] = useState(false);
    const [guessValue, setGuessValue] = useState('');

    useEffect(() =>{
        console.log("guessWordValue:", guessWordValue);
        setGuessValue(guessWordValue)
       
    }, [guessWordValue]);
    
    useEffect(() => {
        console.log("guessWordValue:", guessWordValue);
        const results = evaluateWordScore(guessWordValue, retrieveAnswer().toUpperCase());
        console.log("guessWordValue:", guessWordValue, "RetValue:", retrieveAnswer().toUpperCase());
        console.log("results:", results);
        console.log("isWordEvaluated:", isWordEvaluated)
        setEvaluatedResults(results);
        setIsEvaluated(isWordEvaluated)
    
    } ,[isWordEvaluated])


    return (
        <div style={{marginLeft: '15px'}}>
        {
            guessValue.toUpperCase()
            .split('')
            .map( (nextLetter, letterIndex) =>{
                return <Letter
                key = {'letter_' + letterIndex}
                value = {nextLetter}
                accuracy={ isEvaluated? evaluatedResults[letterIndex] : AccuracyEnum.none}
                position={letterIndex}
                />

                
            })
        }
        </div>
    )
}