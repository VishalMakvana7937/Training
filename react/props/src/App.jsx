import { useState } from 'react'
import './App.css'
import Button from './assets/components/Button'
import Card from './assets/components/Card'

function App() {
  const [count, setcount] = useState(0);

  function handelclick() {
    setcount(count + 1);
  }

  return (
    <>
      {/* passing props as function */}
      <Button increment={handelclick} text="Click me">
        <h1>{count}</h1>
      </Button>

      <div>
        {/* Passing props as children */}
        <Card name="vishal" >
          <h1>Best web dev course</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>cripton of the course</p>
        </Card>
        
        <Card children="children is best">
          I am full stack developer
        </Card>
      </div>
    </>
  )
}

export default App
