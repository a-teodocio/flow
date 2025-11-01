import { useCallback, useState, useEffect } from "react";
import useWords from "./useWords";
import useTimer from "./useTimer";
import useTypings from "./useTypings";
import { countErrors } from "../utils/helpers";
import { START_STATE, RUN_STATE, DONE_STATE, WORDS_MODE, TIMER_MODE } from "../constants";

export type State = typeof START_STATE | typeof RUN_STATE | typeof DONE_STATE;
export type TypingMode = typeof WORDS_MODE | typeof TIMER_MODE;

const useTypingTest = () => {
    const [state, setState] = useState<State>(START_STATE);
    const [currentMode, setCurrentMode] = useState<TypingMode>(TIMER_MODE);
    const {words, wordCount, updateWords, updateWordCount} = useWords();
    const isTimerMode = currentMode === TIMER_MODE;
    const {typed, cursor, clearTyped, resetTotalCharsTyped, totalCharsTyped} = useTypings(state !== DONE_STATE);
    const [errors, setErrors] = useState(0);
    const isStarting = state === START_STATE && cursor > 0;
    const areAllWordsTyped = cursor === words.length;
    const {time, startTimer, resetTimer, updateTimerAmount, initTime } = useTimer(currentMode === TIMER_MODE, areAllWordsTyped);

    const calculateErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setErrors(prevErrors => prevErrors + countErrors(typed, wordsReached));
    }, [typed, words, cursor]);

    useEffect(() => {
        if(isStarting) {
            setState(RUN_STATE);
            startTimer();
        }
    }, [isStarting, cursor, startTimer]);

    // set state to done when time = 0 in timer mode, or when all words
    // have been typed in words mode
    useEffect(() => {
            if((isTimerMode && !time) 
                || (!isTimerMode && areAllWordsTyped)) {
                setState(DONE_STATE);
                calculateErrors();
            }
    }, [time, isTimerMode, areAllWordsTyped, currentMode, calculateErrors]);

    useEffect(() => { // generate new words (for time mode)
        if(isTimerMode && areAllWordsTyped) {
            calculateErrors();
            updateWords();
            clearTyped();
        }
    }, [
        cursor,
        isTimerMode,
        words,
        clearTyped,
        typed,
        areAllWordsTyped,
        updateWords,
        calculateErrors
    ]);

    const restart = useCallback (() => {
        resetTimer();
        resetTotalCharsTyped();
        setState(START_STATE);
        setErrors(0);
        updateWords();
        clearTyped();
    }, [clearTyped, updateWords, resetTimer, resetTotalCharsTyped]);

    const changeMode = useCallback((newMode: TypingMode) => {
        setCurrentMode(newMode);
    }, []);

    useEffect(() => {
        resetTimer();
        resetTotalCharsTyped();
        setState(START_STATE);
        setErrors(0);
        clearTyped();
        updateWords();
    }, [
        wordCount,
        isTimerMode,
        clearTyped,
        currentMode,
        updateWords,
        setErrors,
        resetTimer,
        resetTotalCharsTyped
    ])

    // for restart shortcut
    const keydownHandler = useCallback(({ key }: KeyboardEvent) => {
        if(key === "Escape") {
            restart();
            window.focus();
        }
    }, [restart]);

    useEffect(() => {
        window.addEventListener("keydown", keydownHandler);
        return () => {
            window.removeEventListener("keydown", keydownHandler);
        };
    }, [keydownHandler]);

    return { 
        state,
        currentMode,
        wordCount,
        words, 
        time, 
        initTime, 
        typed, 
        errors, 
        totalCharsTyped,
        restart,
        changeMode,
        changeWordCount: updateWordCount,
        updateTimerAmount
    };
};

export default useTypingTest;