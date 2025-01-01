import React, { useEffect } from 'react'

const LoggerComponents = () => {

    const [count, setCount] = React.useState(0);

    // run on every render
    useEffect(() => {
        console.log('Components rendered or count chnaged:', count);
    })

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default LoggerComponents