const Timer = ({ timeLeft }: { timeLeft: number}) => {
    return <h2 className="text-red-600 text-lg font-semibold">{timeLeft}</h2>;
}

export default Timer;