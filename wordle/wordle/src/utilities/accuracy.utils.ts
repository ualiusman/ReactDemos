import evaluateWordScore from "../evaluation";
import { retrieveAnswer } from "./answerRetriever";

enum AccuracyEnum{
    correct,
    wrongPosition,
    doesNotExist,
    none,

}

 const accuracyColorMap = new Map<AccuracyEnum, string>(
[
    [AccuracyEnum.correct,  '#6CA965'],
    [AccuracyEnum.wrongPosition, '#C8B653'],
    [ AccuracyEnum.none, 'black'],
    [AccuracyEnum.doesNotExist, '#787C7F']
]
);

const accuracyKeyColorMap = new Map<AccuracyEnum, string>(
    [
        [AccuracyEnum.correct,  '#6CA965'],
        [AccuracyEnum.wrongPosition, '#C8B653'],
        [ AccuracyEnum.none, 'black'],
        [AccuracyEnum.doesNotExist, '#787C7F']
    ]
    );


const accuracyKeyForegroundColorMap = new Map<AccuracyEnum, string>(
    [
        [AccuracyEnum.correct,  '#6CA965'],
        [AccuracyEnum.wrongPosition, '#C8B653'],
        [ AccuracyEnum.none, 'black'],
        [AccuracyEnum.doesNotExist, '#787C7F']
        ]
    );

interface ILetterScorePair{
letter:string,
accuracy: number
}


    const calculateLetterAccuracyMap = (words:string[]) : Map<string, AccuracyEnum> => {

        const accuracyMap = new Map<string, AccuracyEnum>();

        words.forEach(word =>{
            const scoringResults = evaluateWordScore(word,retrieveAnswer().toLocaleUpperCase());

            const combinedResults: ILetterScorePair[] =
                scoringResults.map((score, scoreIndex) =>{
                    return {
                        letter: word[scoreIndex],
                        accuracy: score
                    }
                });



            combinedResults.map((result)=>{
                if (accuracyMap.has(result.letter)) {
                    const currentAccuracy = accuracyMap.get(result.letter);
                    
                    if (Number(currentAccuracy) >  Number(result.accuracy)) {
                        accuracyMap.set(result.letter,  result.accuracy);
                        }
                    }
                    else {
                        accuracyMap.set(result.letter, result.accuracy);
                    }
            });
        });

        


        return accuracyMap;
    }
    


export {AccuracyEnum, accuracyColorMap, accuracyKeyColorMap, accuracyKeyForegroundColorMap, calculateLetterAccuracyMap} ;