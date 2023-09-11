import './App.css'
import Counter from './Count'
import Boat from './Boat'
import Users from './Users'

function App() {

  function ButtonClick() {
    alert('Button Clicked')
  }

  const HandleClick = () => {
    alert('Button two clicked')
  }

  const Click4 = (number) => {
    alert(number * 8);
  }

  return (
    <>
      <Users></Users>

      {/* <Boat></Boat> */}
    
      {/* <Counter></Counter> */}

      {/* <p>I am a web developer</p>
      <button onClick={ButtonClick}>Click Me</button>
      <button onClick={HandleClick}>Click Me too</button>
      <button onClick={() => { alert('button 3 clicked') }}>Click Me Three</button>
      <button onClick={() => Click4(9)}>Click 4</button> */}
    </>
  )
}

export default App