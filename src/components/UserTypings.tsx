import TypingCursor from "./TypingCursor";
import cn from "classnames";

const UserTypings = ({
    userInput,
    className,
    words
} : {
    userInput: string,
    className?: string,
    words: string
}) => {
    const typedChars = userInput.split("");

    return (
        <div className={className}>
            {
                typedChars.map((char, index) => {
                    return (
                        <Character 
                            key={`${char}-${index}`}
                            actual={char}
                            expected={words[index]}
                        />
                    );
                })
            }
            <TypingCursor/>
        </div>
    )
};

const Character = (
    { actual, expected }: 
    { actual: string, expected: string }
) => {
    const isSpace = expected === " ";
    const isRight = actual === expected;

    const className = cn({
        "text-theme-primary": !isSpace && isRight,
        "text-theme-error": !isSpace && !isRight,
        "bg-theme-error": isSpace && !isRight
    });

    return <span className={className}>{expected}</span>;
};

export default UserTypings;