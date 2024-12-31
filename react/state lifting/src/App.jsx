import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [name, setname] = useState('');
  return (
    <>
      <Card name={name} setname={setname} />
      <p>I am inside parent components and value of name is : {name}</p>
    </>
  )
}

export default App
