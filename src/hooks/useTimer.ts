import { useCallback, useEffect, useRef, useState } from "react";
import { DEFAULT_TIME_SECS } from "../constants";

const useTimer = (isTimerMode: boolean, areAllWordsTyped: boolean) => {
    const [initTime, setInitTime] = useState(DEFAULT_TIME_SECS);
    const [time, setTime] = useState(initTime);
    const intervalRef = useRef<NodeJS.Timer | null>(null);

    const startTimer = useCallback(() => {
        intervalRef.current = setInterval(() => {
            if (isTimerMode) { // if in timer mode, calculate time left
                setTime(time => time - 1);
            } else { //if in words mode, calculcate time elapsed
                setTime(time => time + 1);
            }
        }, 1000);
    }, [isTimerMode]);

    const resetTimer = useCallback(() => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setTime(initTime); // bring timer back to set initial value
    }, [initTime, setTime]);

    useEffect(() => {
        if(((isTimerMode && !time) || (!isTimerMode && areAllWordsTyped)) && intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }, [time, isTimerMode, areAllWordsTyped, intervalRef]);

    const updateTimerAmount = useCallback((newAmount: number) => {
        resetTimer();
        setInitTime(newAmount);
        setTime(newAmount);
    }, [resetTimer]);

    useEffect(() => {
        if(isTimerMode) {
            setInitTime(DEFAULT_TIME_SECS);
        } else {
            setInitTime(0);
        }
    }, [isTimerMode]);

    return { time, startTimer, resetTimer, updateTimerAmount, initTime };
};

export default useTimer;