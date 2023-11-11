import { AccuracyEnum } from "./utilities/accuracy.utils";



const evaluateWordScore = (guess: string, answer:string) =>{

    let result = [
        AccuracyEnum.doesNotExist,
        AccuracyEnum.doesNotExist,
        AccuracyEnum.doesNotExist,
        AccuracyEnum.doesNotExist,
        AccuracyEnum.doesNotExist
    ];

    let mask = answer;
    let markedCorrect: number[] = [];


    const replaceAt = (source:string, index: number, replacement: string) => {
        if(index >= source.length){
            return source.valueOf();
        }

        return source.substring(0, index) + replacement  + source.substring(index + 1);
    }

    guess.split('').forEach((guessLetter, index) =>{

        if(guessLetter === mask[index]){
            result[index] = AccuracyEnum.correct;
            mask = replaceAt(mask,index, '_');
            markedCorrect.push(index);
        }

    });




    guess.split('').forEach((guessLetter, index) => {
        if(! markedCorrect.includes(index) && mask.split('').includes(guessLetter)){
            result[index] = AccuracyEnum.wrongPosition;
            const firstPositionInAnswer = mask.indexOf(guessLetter);
            mask = replaceAt(mask,firstPositionInAnswer, '_');
        }
    });

    return result;

}

export default evaluateWordScore