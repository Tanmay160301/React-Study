import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyCustomApp() {
//   return (
//     <div>
//       <h2>One Dance</h2>
//     </div>
//   )
// }

// creating our own custom React Element  for the virtual DOM to render it 
const var1 = "Tannu";
const element = React.createElement(
  'a', // tag name
  {href:'https://google.com', target:'_blank'}, // set attributes
  'Good Girl', //innerHTML
  var1//variables can be injected here

);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />,
  element
)
