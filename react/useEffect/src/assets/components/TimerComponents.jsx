import React from 'react'
import { useEffect } from 'react';

const TimerComponents = () => {
    const [seconds, setSeconds] = React.useState(0);

    // it will run on first render
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setInterval executed..!");

            setSeconds(prevSecond => prevSecond + 1);
        }, 1000);

        return () => {
            console.log("Time to stop..!");
            clearInterval(intervalId);
        };

    }, [])

    return (
        <div>
            <h1> Timer: {seconds}</h1>
        </div>
    )
}

export default TimerComponents