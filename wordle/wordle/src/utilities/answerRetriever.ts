import { getWordleList } from "./wordlelist";




export let answer = '';

export const retrieveAnswer = () => {
    
    if(answer.length > 0) return answer;


    const wordlelist = getWordleList();

    answer = wordlelist[Math.floor(Math.random() * wordlelist.length)];

    return answer;
}