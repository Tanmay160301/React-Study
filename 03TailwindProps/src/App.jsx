// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Card } from './Components/Card'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)
  let  myArr1 = [1,2,3];
  let  myObj1 = {
    name : "Tanmay",
    age: 22
  };
  return (
    <>
      <h1 className='bg-green-400 p-5 rounded-xl'>Tailwind Test</h1>
      <Card username="Tanmay" introText='Hi! My name is Tanmay' myArr={myArr1} myObj = {myObj1} />
      <Card username="Yash" introText='Hi! My name is Yash' myArr={myArr1} myObj = {myObj1} />
      <Card username="Varad" introText='Hi! My name is Varad' myArr={myArr1} myObj = {myObj1} />
      <Card username="Viraj" introText='Hi! My name is Viraj' myArr={myArr1} myObj = {myObj1} />
      <Card  myArr={myArr1} myObj = {myObj1} />
      
    </>
  )
}

export default App
