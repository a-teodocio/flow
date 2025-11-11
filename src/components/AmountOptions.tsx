
import ModeButton from "./ModeButton";

const AmountOptions = ({
    currentAmount,
    changeAmount,
    options
}: {
    currentAmount: number,
    changeAmount: (newAmount: number) => void;
    options: number[];
}) => {
    const underlineStyle = "underline underline-offset-4";

    return (
        <div>
            {
                options.map((amount, index) => {
                    return (
                        <>
                            <ModeButton
                                key={`${amount}-${index}`}
                                className={amount === currentAmount ? underlineStyle : ""}
                                text={`${amount}`}
                                onClick={() => changeAmount(amount)}
                            />
                            { 
                                (index < options.length - 1) && 
                                <span className="mx-1"> / </span> 
                            }
                        </>
                    )
                })
            }
        </div>
    );
};

export default AmountOptions;