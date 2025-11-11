import { TypingMode } from "../hooks/useTypingTest";
import Timer from "./Timer";
import { TIMER_MODE, WORDS_MODE, WORD_MODE_OPTIONS, TIME_MODE_OPTIONS } from "../constants";
import ModeButton from "./ModeButton";
import AmountOptions from "./AmountOptions";

const ModeSelector = ({
    timeLeft,
    initTime,
    currentMode,
    currentWordCount,
    changeMode,
    changeWordCount,
    changeTimerAmount
} : {
    timeLeft: number,
    initTime: number,
    currentMode: string;
    currentWordCount: number;
    changeMode: (newMode: TypingMode) => void;
    changeWordCount: (newWordCount: number) => void;
    changeTimerAmount: (newTime: number) => void;
}) => {
    const underlineStyle = "underline underline-offset-4";
    const isTimerMode = currentMode === TIMER_MODE;

    const changeToWordsMode = () => {
        changeMode(WORDS_MODE);
    }

    const changeToTimerMode = () => {
        changeMode(TIMER_MODE);
    }

    return (
        <>
            <div className="flex justify-between text-primary-400 text-lg font-semibold">
                {
                    <AmountOptions
                        currentAmount={ isTimerMode ? initTime : currentWordCount }
                        changeAmount={ isTimerMode ? changeTimerAmount : changeWordCount }
                        options={ isTimerMode ? TIME_MODE_OPTIONS : WORD_MODE_OPTIONS }
                    ></AmountOptions>
                }
                <div>
                    <span className="mr-2">Mode:</span>
                    <ModeButton 
                        className={isTimerMode ? underlineStyle : ""}
                        text="Timer"
                        onClick={changeToTimerMode}
                    ></ModeButton>
                    <span className="mx-1"> / </span>
                    <ModeButton 
                        className={isTimerMode ? "" : underlineStyle}
                        text="Words"
                        onClick={changeToWordsMode}
                    ></ModeButton>
                </div>
            </div>
            <div>
                { isTimerMode ? <Timer timeLeft={timeLeft} /> : null }
            </div>
        </>
    );
};

export default ModeSelector;