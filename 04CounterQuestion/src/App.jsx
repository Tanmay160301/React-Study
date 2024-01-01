import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

/**
 * 
 * setCounter() cha nature bghitla
 * setCounter((prevCounter)=> /some operation on prevCounter/)
 * 
 * 
 */


function App() {
  let [counter, setCounter] = useState(0);


  function increment(){
    if (counter>=20) {
      setCounter(20)
    }
    else
    {
      //Assuming the counter value is 0
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      //Even if I do this , the result will still be 1 and not 5, becoz here the react fibre will send
      //this to the engine in batches and since all these operations are doing only one thing and the 
      //same, all these things will happen only once... but if we purposely want it to go from 1 to 5 we
      //have to do something like this

      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
      // setCounter(counter+1);
      // Now here since we are passing the value of the previous counter, useState will not send these 
      //in batches to the fibre, it will individually run then one by one
      // if we add setCounter(counter+1 line in it), then ekanech counter vadnar 

    }

    // (counter>=20)?setCounter(20):setCounter(counter+1);
    
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
