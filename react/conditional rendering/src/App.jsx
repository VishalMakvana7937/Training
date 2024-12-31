import { useState } from 'react'
import './App.css'
import Logout from './assets/components/Logout';
import Login from './assets/components/Login';

function App() {

  const [login, setlogin] = useState(false);

  // early return
  if (!login) {
    return (
      <Login />
    )
  }

  // Logical operator

  // return (
  //   <div>
  //     <h1> Conditional Rendering</h1>
  //     <div>{login && <Login />}</div>
  //   </div>
  // )

  // using ternary operator

  // return (
  //   <div>
  //     {login ? <Logout /> : <Login />}
  //   </div>
  // )

  // using if else condition

  // if (login) {
  //   return (
  //     <Logout />
  //   )
  // }
  // else {
  //   return (
  //     <Login />
  //   )
  // }

}

export default App
