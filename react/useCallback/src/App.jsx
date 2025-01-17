import { useCallback, useState } from 'react';
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {

  const [count, setCount] = useState(0);

  const handelClick = useCallback(() => {
    setCount(count + 1);
  },[count])

  return (
    <>
      <div>
        count : {count}
      </div>

      <div>
        <button onClick={handelClick}>inc</button>
      </div>

      <div>
        <ChildComponent buttonName="click me" handelClick={handelClick} />
      </div>
    </>
  )
}

export default App
