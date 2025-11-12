import { useRef } from "react";

const ModeButton = ({ className, text, onClick } : {className?: string, text: string, onClick: () => void}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        onClick();
        if (buttonRef.current) {
            buttonRef.current.blur();
        }
    };

    return (
        <button 
            ref={buttonRef} 
            className={className} 
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default ModeButton;