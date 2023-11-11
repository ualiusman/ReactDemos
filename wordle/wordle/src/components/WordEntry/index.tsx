import { useRef, useState } from "react";
import { StyledEvaluatedButton, StyledWordEntry } from "./index.style";

interface IWordEntryProps {
    onGuessEntered(guess:string):  void;
    onGuessComplete(): void;
}

export const WordEntry = ({onGuessEntered, onGuessComplete}: IWordEntryProps) => {

    const [value, setValue] = useState('');
    const wordEntryRef = useRef<HTMLInputElement>(null);
    
    const getValidWordleString = (rawString: string) =>{
        const uppercaseString = rawString.toUpperCase();
        const validWordleString = uppercaseString.replace(/[^a-z]/gi, '');
        return validWordleString?.toUpperCase();
    }

    const handleLetterEntry = (e:any) => {
        const validString: string = getValidWordleString(e.target.value);
        onGuessEntered(validString);
        setValue(validString);
    }

    const handleEnterPressed = (e:React.KeyboardEvent<HTMLInputElement>) => {

        if(e.key == "Enter"){
            handleGuessComplete();
        }
    }

    const handleGuessComplete = () => {
        setValue('');
        wordEntryRef?.current?.focus();
        onGuessComplete();
    }



    return (
        <>
            <StyledWordEntry autoFocus placeholder="Enter your guess.." value={value}
            maxLength={5}
            onChange={ (e:any) => handleLetterEntry(e)} 
            onKeyUp={ (e:any) => handleEnterPressed(e)}
            ref = {wordEntryRef}
            />
            { (value.length !== 5)? '' : 
                <StyledEvaluatedButton onClick={handleGuessComplete}>
                    Guess
                </StyledEvaluatedButton>
            }
        </>
    )
}