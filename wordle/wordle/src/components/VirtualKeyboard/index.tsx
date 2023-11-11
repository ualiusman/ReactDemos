import { useEffect, useState } from "react";
import { StyledKeyboardContainer, StyledKeyboardRow } from "./index.style";
import { VirtualKey } from "../VirtualKey";
import { AccuracyEnum, calculateLetterAccuracyMap } from "../../utilities/accuracy.utils";
import { IGuess } from "../WordBoard";


interface IVirtualKeyboardProps{
    wordGuesses: IGuess [],
    onClickedKey(key:string) :  void 
    
}

export const VirtualKeyboard = ({ wordGuesses, onClickedKey}: IVirtualKeyboardProps) =>{

    const InitialFirstRow: string[] = [
        'Q',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        ];
    
        const InitialSecondRow: string[] = [
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        ];
    
        const InitialThirdRow: string[] = [
        'BackSpace',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        'Enter',
        ];

        const [firstRow, setFirstRow] = useState<string[]>(InitialFirstRow);
        const [secondRow, setSecondRow]  = useState<string[]>(InitialSecondRow);
        const [thirdRow, setThirdRow] = useState<string[]>(InitialThirdRow);
        const [letterScoreMap, setLetterScoreMap] = useState<Map<string, AccuracyEnum>>();

        useEffect(()=>{

            const tempLetterScoreMap =  
            calculateLetterAccuracyMap(wordGuesses.filter(g => g.evaluated)
            .map((guess) =>{ return guess.guessedWord}));

            setLetterScoreMap(tempLetterScoreMap);
        },[wordGuesses]);


        const lookupLetterAccuracy = (letter: string): AccuracyEnum=>{


            if (letterScoreMap?.has(letter)) {

                    return letterScoreMap.get(letter) ?? AccuracyEnum.none
                    
            }
            else{
                return AccuracyEnum.none

            }
        }
        

    return(
        <>
        <StyledKeyboardContainer>
            <StyledKeyboardRow>
                {
                    firstRow.map(virtualKey =>{
                        return <VirtualKey 
                        accuracy={lookupLetterAccuracy(virtualKey)} 
                        value={virtualKey} onClickedKey={onClickedKey} ></VirtualKey>
                    })
                }
            </StyledKeyboardRow>
            <StyledKeyboardRow>
                {
                    secondRow.map(virtualKey =>{
                        return <VirtualKey 
                        accuracy={lookupLetterAccuracy(virtualKey)} 
                        value={virtualKey} onClickedKey={onClickedKey} ></VirtualKey>
                    })
                }
            </StyledKeyboardRow>
            <StyledKeyboardRow>
                {
                    thirdRow.map(virtualKey =>{
                        return <VirtualKey 
                        accuracy={lookupLetterAccuracy(virtualKey)} 
                        value={virtualKey} onClickedKey={onClickedKey} ></VirtualKey>
                    })
                }
            </StyledKeyboardRow>
        </StyledKeyboardContainer>
        </>
    )
}