import './App.css'

function App() {

  function handelClick() {
    alert("I am Clicked..!")
  }

  function handelMouseCver() {
    alert("Mouse is over me..!")
  }

  function handelChange(e) {
    console.log("Value till now..!", e.target.value);
  }

  function handelSubmit(e) {
    e.preventDefault();
    alert("I am Submit..!")
  }

  return (
    <>

      <button onClick={() => alert("Button clicked..!")}>Click me</button>

      <form onSubmit={handelSubmit}>
        <input type="text" onChange={handelChange} />
        <button type='submit'>Submit</button>
      </form>

      <p onMouseOver={handelMouseCver}>Lorem ipsum dolor sit amet.</p>
      <button type='submit' onClick={handelClick}>click me</button>
    </>
  )
}

export default App
