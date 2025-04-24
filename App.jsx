import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);
  
  const increaseCount = () => {
    setCount(prev => prev + 1);
  }
  const decreaseCount = () => {
    if(count > 0) {
      setCount(prev => prev - 1);
    }
  }
    
  const resetCount = () =>{
    setCount(0);
  }

  return (
    <>
    
       <h1>Click Counter App</h1>
       <div>
      <h2> count: {count}</h2>
      <div className="clickbutton">
    <button className="increase" onClick={increaseCount}> Increase  </button>
    <button className="decrease" onClick={decreaseCount}> Decrease </button>
    <button className="reset" onClick={resetCount}> Reset </button>
    </div>
    </div>
      
    </>
  )
}

export default App;
