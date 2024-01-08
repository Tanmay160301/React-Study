import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

/**
 * 
 * Basic expectation from this code:
 * As soon as user clicks on any colored button the background color is changed to 
 * that mentioned on the button
 * 
 * useState cha use kelay to keep track of color
 * jyaveli pn user button varti click karel tyaveli state change honar and color badalnar
 * 
 * 
 * 
 */

import "./App.css";

function App() {
  const [color, setColor] = useState("teal");

  //jr onClick madhe function call karycha asel with parameters tr onClick madhe arrow function lihine and 
  //then tikadun call karne function ...
  let handleBlack = (c) => {
    document.getElementById("txt").style.color = "white";
    setColor(c);    
    return;
  }
  let handleWhite = (c) => {
    document.getElementById("txt").style.color = "black";
    setColor(c);    
    return;
  }

  return (
    <>
      <div className="w-full h-screen  bg-blue-200" style={{backgroundColor:color}} >
        <div className="text-center  text-3xl py-3 font-mono underline" id="txt">
          The Background Color Changer Project
        </div>
        <div className="flex space-x-4 justify-center my-6 mx-72 shadow-xl rounded-xl  bg-gray-200">
          <button className="bg-red-500  rounded-2xl w-[75px] py-2 my-2" onClick={ ()=>{setColor("red")} }>
            Red
          </button>
          <button className="bg-green-500 rounded-2xl w-[75px] py-2 my-2" onClick={()=> {
            return setColor("green");
          }}>
            Green
          </button>
          <button className="bg-blue-500 rounded-2xl w-[75px] py-2 my-2" onClick={()=> setColor("blue")}>
            Blue
          </button>
          {/* <button className="bg-olive-500">Olive</button> */}
          <button className="bg-gray-500 rounded-2xl w-[75px] py-2 my-2" onClick={() => setColor("gray")}>
            Gray
          </button>
          <button className="bg-yellow-500 rounded-2xl w-[75px] py-2 my-2" onClick={() => {
            return setColor("yellow");
          }}>
            Yellow
          </button>
          <button className="bg-pink-500 rounded-2xl w-[75px] py-2 my-2" onClick={() => setColor("pink")}>
            Pink
          </button>
          <button className="bg-purple-500 rounded-2xl w-[75px] py-2 my-2" onClick={() => {return setColor("purple")}}>
            Purple
          </button>
          {/* <button className="bg-purple-500 rounded-lg w-[75px] py-2 my-2">Purple</button> */}
          {/* <button className="bg-l-500">Lavender</button> */}
          <button className="bg-white rounded-2xl w-[75px] py-2 my-2" onClick={() => handleWhite("white")}>
            White
          </button>
          <button className="bg-black text-white rounded-2xl w-[75px] py-2 my-2" onClick={() => handleBlack("black")}>
            <span >Black</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
