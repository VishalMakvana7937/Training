import './App.css'
import UserCard from './components/UserCard'

function App() {

  return (
    <>
      <div className="container">
        <UserCard name="Card_1" des="This is card 1" style={{ "border-radius": "10px" }} />
        <UserCard name="Card_2" des="This is card 2" style={{ "border-radius": "10px" }} />
        <UserCard name="Card_3" des="This is card 3" style={{ "border-radius": "10px" }} />
      </div>
    </>
  )
}

export default App
