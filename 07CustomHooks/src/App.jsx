/* eslint-disable no-unused-vars */
import { useState } from "react";
import UseCurrencyInfo from './hooks/UseCurrencyInfo';
import { InputBox } from "./components";
import './App.css'

function App() {
  // let [currency, setCurrency] = useState("inr");

  // let currencyInfor = UseCurrencyInfo(currency);

  // function show(){
  //   console.log(currencyInfor);
  // }

  const [amount , setAmount] = useState(1);
  const [from , setFrom] =useState("usd");
  const [to , setTo] =useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrInfo = UseCurrencyInfo(from);
  const currencyOptions = Object.keys(CurrInfo);

  let swap = () => {

    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);

  }

  let convert = () => {
    setConvertedAmount(CurrInfo[to] * amount);
  }
  console.log(currencyOptions);

  return (
    <>
 
    <div className="relative w-[700px] h-[500px] top-28 left-[25%] flex justify-center items-center bg-gray-200 bg-opacity-50 rounded-3xl">
    
      <div className="absolute">
      <h1 className="text-5xl font-black  text-red-700 mb-7 text-center">Currency Converter</h1>
      <InputBox label ="From" amount = {amount} currencyOptions={currencyOptions} currency={from} onCurrencyChange={ (currency) => setFrom(currency)} onAmountChange={(amount) => setAmount(amount)}/>
      <div className="flex justify-center ">
      <button className="bg-red-700 px-5 tracking-wider py-3 my-1 font-mono rounded-lg font-bold" onClick={swap}>SWAP</button>
      </div>
      
      <InputBox label="To" amount={convertedAmount} currencyOptions={currencyOptions} currency={to} onCurrencyChange={ (currency) => setTo(currency)} />
      <div className="flex justify-center ">
      <button className="bg-red-700 px-5 tracking-wider py-3 my-1 font-mono rounded-lg font-bold" onClick={convert}>Convert {from} to {to}</button>
      </div>
      </div>
      

    </div>

    </>
  )
}

export default App
