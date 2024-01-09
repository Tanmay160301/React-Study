/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

/* 

Design the components 

Handle Props  - a. Handle props values ...b. Handle props methods/ events declare karun thevne
nantr te events App.jsx madhe define karta yetil (onChange ani onClick che events declare karne)

Think for optimization and then export the components

Some imp points:



Practically saw how a map function lavoon jsx return karne ... select ani option field kasa lihilay te bgh
For optimization

Practically saw and implemented how an event in the components side is declared 
Syntax: 
    1. onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
        in App.jsx : onCurrencyChange={ (currency) => setFrom(currency)} ... event handled in app.jsx

    2.  onChange={(e) => {onAmountChange && onAmountChange(e.target.value)}}
        nantr App.jsx madhe tyacha corresponding handler declare kela ahe
        onAmountChange={(amount) => setAmount(amount)}... event handler in app.jsx



*/
import React, { useId } from 'react'

export function InputBox({
    label, //to / from
    amount, 
    onAmountChange,// to set an event which will update the amount in App.jsx
    currency = "", // attachi instance chi currency ...(select chi value thevnya sathi)
    onCurrencyChange, // currency la update karnya sathi cha event declare
    currencyOptions = [], // Good practice to keep that empty so that app does not crash ...(options che values)
    amountDisable = false , // Good practice to declare them as false 
    currencyDisable = false
 
}) {
    
    const amountInputId = useId(); // for binding label and input tags for assistive technologies

    return (
        <>
           <div className=' bg-white text-black flex rounded-xl font-mono shadow-xl'>

            <div className='w-[300px] h-[150px]  relative rounded-l-xl '>
                <label className='absolute top-3 left-2' htmlFor='amountInputId'>{label}</label><br/>
                <input className='absolute bottom-3 left-3' type="number" value={amount} name="" id="amountInputId" onChange={(e) => {onAmountChange && onAmountChange(e.target.value)}} disabled = {amountDisable}/>
            </div>
            <div className='w-[300px] h-[150px]  relative rounded-r-xl'>
                <label className='absolute top-3 right-2'>Currency Type</label>
                <select className='absolute bottom-3 right-3'  name="" id="" value = {currency}
                onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }} disabled ={currencyDisable}
                >

                    {currencyOptions.map( (item) => 
                        ( 
                            <option key={item} value={item}> {item}  </option>
                            //Always use key as an attribute while looping over array elements
                            // This is for optimization
                        )

                     )}

                </select>
            </div>

           </div>
        </>
    )
}
