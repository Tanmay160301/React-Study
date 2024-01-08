/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useId } from 'react'

export function InputBox({
    label,
    amount,
    onAmountChange,
    currency = "",
    onCurrencyChange,
    currencyOptions = [],
    amountDisable = false , 
    currencyDisable = false
 
}) {
    
    const amountInputId = useId();

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
                        )

                     )}

                </select>
            </div>

           </div>
        </>
    )
}
