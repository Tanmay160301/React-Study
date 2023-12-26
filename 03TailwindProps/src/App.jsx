/* 
Basic expectation from this code:

Props is responsible for making the components reusable

Basic understanding of props and how it is responsible for passing values or properties from App.jsx to
individual  components

practically saw how Tailwindcss can be set up in react

practically saw how props are passed 
practically saw how props are handled
practically saw how default values in props are handled

Its a best practice to create a folder namely Components and create your components inside it and 
then import those in app.jsx

Some imp points from sir:

props initially gives an empty object which is also linked with one of the prototype object

props madhe key value aapn string directly pass karu shaktoy but when it comes to passing arrays or objects
 or functions or variables we have to pass the reference of it

Its a good practice ki props chya thikane object destructuring karne

*/




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
