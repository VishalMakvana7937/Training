import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/conunter/CounterSlice';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handelIncClick() {
    dispatch(increment());
  }

  function handelDecClick() {
    dispatch(decrement());
  }

  function handelResetClick() {
    dispatch(reset());
  }

  function handelAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <div className="container">
        <button onClick={handelIncClick}>+</button>
        <p>Count : {count}</p>
        <button onClick={handelDecClick}>-</button>
        <br />
        <br />
        <button onClick={handelResetClick}>Reset</button>
        <br />
        <br />
        <input type="Number" value={amount} placeholder='Enter amount' onChange={(e) => setAmount(e.target.value)} />
        <br />
        <br />
        <button onClick={handelAmountClick}>Inc by amount</button>
      </div>
    </>
  )
}

export default App
