import React, { useEffect, useState } from 'react'

const MultiEffectComponents = () => {

    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // side-effect logic will run only when count is changed
    useEffect(() => {
        console.log("Count chnaged..!", count);

    }, [count]);

    // it will run only on first render
    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log(" setInterval Started..!");
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000)

        return () => {
            console.log("Time to Stop..!");

            clearInterval(intervalID);
        }
    }, [])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <h1>Seconds: {seconds}</h1>

        </div>
    )
}

export default MultiEffectComponents