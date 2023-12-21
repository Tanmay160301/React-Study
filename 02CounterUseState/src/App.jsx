import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

/**
 * 
 *  Basic expectation from this code:
 *  Basic understanding of what are hooks
 *  basic understanding about what is useState 
 * 
 *  basic understanding about its syntax : 
 *  let [counter, setCounter] = useState(default Value)
 * 
 *  Practically implemented useState hook by creating a counter Project
 *  one counter is there , 2 buttons are there, One is increment and the other one is decrement 
 *  increment - adds counter by one
 *  decrement - substracts the counter by one
 * 
 * 
 */


function App() {
  let [counter, setCounter] = useState(12);


  function increment(){
    // if (counter>=20) {
    //   setCounter(20)
    // }
    // else
    // {
    //   setCounter(counter + 1);
    // }

    (counter>=20)?setCounter(20):setCounter(counter+1);
    
  }

  function decrement() {
    // if(counter <= 0)
    // setCounter(counter - 1);
    (counter<=0)? setCounter(0): setCounter(counter - 1);
  }
  return (
    <>
        <h1>Counter Value : {counter}</h1>
        <button onClick={increment}>Increment {counter}</button> <br /> <br />
        <button onClick={decrement}>Decrement {counter}</button>
        <p>The value of the counter is {counter}</p>
    </>
  )
}

export default App
