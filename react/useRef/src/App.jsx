import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

  const [count, setCount] = useState(0);
  let val = useRef(0);

  function handelInc() {
    val.current = val.current + 1;
    console.log(" Incremented", val.current);

    setCount(count + 1);
  }

  // it runs on every render
  useEffect(() => {
    console.log(" useEffect is called");

  })

  return (
    <>
      <div>
        <button onClick={handelInc}>Increment</button>
        <br />
        <div>
          <h1>Count: {count}</h1>
        </div>
      </div>
    </>
  )
}

export default App
