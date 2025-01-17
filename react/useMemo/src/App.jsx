import { useMemo, useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  function expensiveTask(num) {
    console.log(" Inside Expensive Task");
    for (let i = 0; i <= 10000000; i++) { }
    return num * 2
  }

  let result = useMemo(() => expensiveTask(inputValue), [inputValue])

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <p>Count: {count}</p>

        <input type="number" placeholder='Enter number' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

        <p>Double: {result}</p>
      </div >
    </>
  )
}

export default App
