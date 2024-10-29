import Words from "./Words";
import UserTypings from "./UserTypings";

const WordsContainer = ({
  wordsGenerated,
  userInput,
}: {
  wordsGenerated: string;
  userInput: string;
}) => {
  return (
    <div
      className="relative max-w-3xl mt-3 text-3xl leading-relaxed  text-primary-600 break-all"
      style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
    >
      <Words words={wordsGenerated} />
      <UserTypings
        className="absolute inset-0"
        userInput={userInput}
        words={wordsGenerated}
      />
    </div>
  );
};

export default WordsContainer;
