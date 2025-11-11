import RedoButton from "./components/RedoButton";
import Stats from "./components/Stats";
import WordsContainer from "./components/WordsContainer";
import useTest from "./hooks/useTypingTest";
import Header from "./components/Header";
import KeyboardShortcutsText from "./components/KeyboardShortcutsText";
import { calculateAccuracy, calculateWordsPerMinute } from "./utils/helpers";
import { DONE_STATE, TIMER_MODE } from "./constants";
import ModeSelector from "./components/ModeSelector";

function App() {
  const { state, currentMode, wordCount, words, time, initTime, typed, errors, totalCharsTyped, restart, changeMode, changeWordCount, updateTimerAmount } = useTest();
  const isDone = state === DONE_STATE;
  const isTimerMode = currentMode === TIMER_MODE;

  return (
    <>
      <Header/>
      <ModeSelector 
        timeLeft={time}
        initTime={initTime}
        changeMode={changeMode}
        currentMode={currentMode}
        changeWordCount={changeWordCount}
        currentWordCount={wordCount}
        changeTimerAmount={updateTimerAmount}
      />
      <WordsContainer 
        wordsGenerated={words}
        userInput={typed}
      />
      <RedoButton 
        onRestart={restart}
        className={"mx-auto mt-10 text-slate-500"}
      />
      <KeyboardShortcutsText/>
      { 
        isDone && 
        <Stats
          accuracy={calculateAccuracy(errors, totalCharsTyped)}
          wpm={calculateWordsPerMinute(isTimerMode ? initTime : time, errors, totalCharsTyped)}
          charsTyped={totalCharsTyped}
          errors={errors}
          className="mt-10"
        />
      }
    </>
  );
}

export default App;
