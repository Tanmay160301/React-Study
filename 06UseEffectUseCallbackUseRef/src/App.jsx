/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  let [length, setLength] = useState(50);
  let [numbersAllowed, setNumbersAllowed] = useState(false);
  let [specialCharsAllowed, setSpecialCharsAllowed] = useState(false);
  let [password, setPassword] = useState("abc");

  // let passwordGenerator = useCallback(() => {
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   let pass = "";

  //   if (numbersAllowed) {
  //     str += "0123456789";
  //   }

  //   if (specialCharsAllowed) {
  //     str += "!@#$%^&*()_+:;,./*";
  //   }

  //   for (let i = 0; i < length; i++) {
  //     let index = Math.floor(Math.random() * str.length + 1);
  //     pass += str.charAt(index);
  //   }

  //   setPassword((prevPass) => pass);
  // }, [length, numbersAllowed, specialCharsAllowed, setPassword]);

  let passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
  
    if (numbersAllowed) {
      str += "0123456789";
    }
  
    if (specialCharsAllowed) {
      str += "!@#$%^&*()_+:;,./*";
    }
  
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
  
    // setPassword((prevPass) => pass);

    setPassword((prevPass) => pass);
  }, [length, numbersAllowed, specialCharsAllowed, setPassword]);

  // function updateSlider(e) {
  //   setLength(e.target.value);
  // }

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, specialCharsAllowed, passwordGenerator]);

  return (
    <>
      <div className=" mt-40 font-mono mx-60 shadow-2xl bg-gray-800 rounded-xl ">
        <h1 className="text-3xl font-bold text-center py-4 underline text-white">
          Password Generator
        </h1>
        <div className="flex justify-center gap-x-4  py-4 ">
          <input
            type="text"
            value={password}
            placeholder="password"
            className=" w-[400px] h-[40px] rounded-lg "
          />
          <button className="px-4 bg-blue-600 rounded-lg hover:bg-blue-800 text-white ">
            Copy
          </button>
        </div>
        <div className="flex justify-center gap-x-4  items-center py-4 ">
          <input
            id="slider"
            type="range"
            min={0}
            max={100}
            value={length}
            placeholder="password"
            className=" w-[400px] h-[40px] cursor-pointer text-black"
            onChange={(e) => {setLength(e.target.value)}}
          />
          <span className="text-white">Length: {length}</span>

          <div className="flex gap-x-2 text-white">
            <input
              type="checkbox"
              onChange={() => setNumbersAllowed((prev) => !prev)}
            />
            <span>Numbers</span>
            <input
              type="checkbox"
              onChange={() => setSpecialCharsAllowed((prev) => !prev)}
            />
            <span>Special Characters</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
