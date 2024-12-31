import React, { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0);
    return (
        <div className='counter_container'>
            <p id='para'>You have clicked {count} times</p>
            <button type='submit' onClick={() => { setcount(count + 1) }}>click me</button>
        </div>
    )
}

export default Counter