import evaluateWordScore from "./evaluation"
import { AccuracyEnum } from "./utilities/accuracy.utils";

test('Evaluate wordle all correct', () =>{
    const result = evaluateWordScore('react', 'react');
    expect(result[0]).toBe(AccuracyEnum.correct);
    expect(result[1]).toBe(AccuracyEnum.correct);
    expect(result[2]).toBe(AccuracyEnum.correct);
    expect(result[3]).toBe(AccuracyEnum.correct);
    expect(result[4]).toBe(AccuracyEnum.correct);

});


test('Evaluate wordle all incorrect', () =>{
    const result = evaluateWordScore('react', 'uswxz');
    expect(result[0]).toBe(AccuracyEnum.doesNotExist);
    expect(result[1]).toBe(AccuracyEnum.doesNotExist);
    expect(result[2]).toBe(AccuracyEnum.doesNotExist);
    expect(result[3]).toBe(AccuracyEnum.doesNotExist);
    expect(result[4]).toBe(AccuracyEnum.doesNotExist);
});


test('Evaluate wordle wrong position', () =>{
    const result = evaluateWordScore('react', 'house');
    expect(result[0]).toBe(AccuracyEnum.doesNotExist);
    expect(result[1]).toBe(AccuracyEnum.wrongPosition);
    expect(result[2]).toBe(AccuracyEnum.doesNotExist);
    expect(result[3]).toBe(AccuracyEnum.doesNotExist);
    expect(result[4]).toBe(AccuracyEnum.doesNotExist);
});


test('Evaluate wordle one letter in right position, one wrong postion', () =>{
    const result = evaluateWordScore('oboes', 'moons');
    expect(result[0]).toBe(AccuracyEnum.wrongPosition);
    expect(result[1]).toBe(AccuracyEnum.doesNotExist);
    expect(result[2]).toBe(AccuracyEnum.correct);
    expect(result[3]).toBe(AccuracyEnum.doesNotExist);
    expect(result[4]).toBe(AccuracyEnum.correct);
});


test('Evaluate one letter in right position,with two of the same letter in the guess,\
    and one in wrong position', () =>{
    const result = evaluateWordScore('roomy', 'tombs');
    expect(result[0]).toBe(AccuracyEnum.doesNotExist);
    expect(result[1]).toBe(AccuracyEnum.correct);
    expect(result[2]).toBe(AccuracyEnum.doesNotExist);
    expect(result[3]).toBe(AccuracyEnum.wrongPosition);
    expect(result[4]).toBe(AccuracyEnum.doesNotExist);
});


test('Evaluate one letter in right position,with two of the same letter in the guess,\
    and one in wrong position', () =>{
    const result = evaluateWordScore('taste', 'papal');
    expect(result[0]).toBe(AccuracyEnum.doesNotExist);
    expect(result[1]).toBe(AccuracyEnum.correct);
    expect(result[2]).toBe(AccuracyEnum.doesNotExist);
    expect(result[3]).toBe(AccuracyEnum.doesNotExist);
    expect(result[4]).toBe(AccuracyEnum.doesNotExist);
});