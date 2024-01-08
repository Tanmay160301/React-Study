/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

/**
 *  Basic expectation from this code:
 *  The goal is to write password generator in an optimised way
 *  Ek input field dileli ahe ... tithe password generate vhyla pahije ...
 *  1 button is given which if onClicked then password clipboard madhe yayla pahije
 *  2 checkboxes are given which on clicked adds numbers or special characters to the sample string
 *  
 *  Concepts:
 *  Kahi react che hooks memoization process use kartat for optimization..keep necessary things in cache
 *  memory ....variables or few lines of code
 *  
 *  useCallback - used to write a function which will be undergo memoization
 *  Syntax: 
 *  const fName = useCallback( () => {} , [dependency Array]) ... this array will cache those variables
 *  to optimise the running process
 * 
 *  useEffect - useEffect hya function/hook chya aat code asto or function asel which will run as soon as
 *  the dependency variables chi chedchad zali
 *  Syntax:
 *  useEffect( () => {},[dependency arry of variables])... hya arrow function madhla code execute honar as
 * soon as the dependency variables chi chedchad zali
 * 
 *  useRef - It is used to associate 2 things or UI components or HTML elements ..
 *  DOM sarkha select karnyacha kam kartay ... 
 *  
 *  for example Copy button dabla ki input text highlight hoil ... 
 *  hya case madhe input text madhe useRef variable lavla asel 
 * 
 *  useRef ek object return kartay which has one property called as current property
 *  Syntax:  
 *  let pass = useRef(variable); variable is initial value for hook
 *  jya html element madhe te useRef hook takycha ahe tithe javoon ek attribute set karycha
 *  ref = {pass}
 *  
 *  
 * 
 *  Approach:
 *  
 *  UI create karycha
 *  states define karyche for the project
 *  kutli functionality pahije ti identify karychi - tyala function madhe convert karycha
 *  hya case madhe password generator ani copyToClipboard cha function
 *  
 *  Some additional notes:
 * 1. There is the difference of usage between use callback and useeffect...the former is used for optimization
 *  ... cache madhe variables la consider karne ... jastit jast lavkar render vhyla pahije...
    The later is used for jasa ched Chad zali dependency variables la tr function call kara....

    2. Dependency(in useCallback) is like...meri in logon se baat ho rahi hai...baki aap dekhiyega optimization
     ka

    3. kutla pn change yet asla in website ... then behind the scene a function is running

    4.React compile hote at the end of the day into javascript and then runs on the browser

    5.useEffect madhe mala aata he mahit ahe ki first time jyaveli page reload hoil tyaveli useEffect
     call hoil ... and second scenario is when dependencies che variables jyaveli chedchad honar tyaveli run 
     honar

 */


import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  let [length, setLength] = useState(50);
  let [numbersAllowed, setNumbersAllowed] = useState(false);
  let [specialCharsAllowed, setSpecialCharsAllowed] = useState(false);
  let [password, setPassword] = useState("abc");

  let passref = useRef(null);

  //function la efficient way madhe run karnya sathi use hota ... memoization cha concept use hoto
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

  //observe how this function is written
  let copyToClipboard = useCallback(() => {
    passref.current?.select(); // Copy button varti click kela ki highlight cha effect yeto 
    //tyala aapn kindof jodlay ref hook ni 
    //question mark is there because firstly we check ki object kashyala tri kharach point kartoy kay
    //so we are kind of checking 

    passref.current?.setSelectionRange(0,100);


    window.navigator.clipboard.writeText(password);
  } , [password]);

  
  // kutlya pn eka variable barobar chedchad zali tr function parat run karycha 
  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, specialCharsAllowed, passwordGenerator]);

  return (
    <>
      <div className=" mt-40 font-mono mx-60 shadow-2xl  rounded-xl z-10">
        <h1 className="text-3xl font-bold text-center py-4 underline text-white">
          Password Generator
        </h1>
        <div className="flex justify-center gap-x-4  py-4 ">
          <input
            type="text"
            value={password}
            placeholder="password"
            className=" w-[400px] h-[40px] rounded-lg "
            ref = {passref} // reference ghetlela ahe ... ata button click kela ki kay tr vhyla pahije
          />
          <button className="px-4 bg-blue-600 rounded-lg hover:bg-blue-800 text-white " onClick={copyToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex justify-center gap-x-4  items-center py-4 ">
          {/* observe ki slider varti useState variables chi value kashi takli ahe */}
          <input
            id="slider"
            type="range"
            min={0}
            max={100}
            value={length}
            placeholder="password"
            className=" w-[400px] h-[40px] cursor-pointer text-black"
            onChange={(e) => {setLength(e.target.value)}}
            // Observe how onChange madhe event listener lihilay
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
