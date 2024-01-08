/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";

function UseCurrencyInfo(currency){

    let [rates,setRates] = useState({});

    useEffect(() => {
        
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        fetch(url).
        then((response) => response.json()).
        then((response) => {
           setRates(response[currency]);//square bracket notation use kela ahe

        } ).
        catch((error) => {
            console.log(error);
        })
        
    }, [currency])

    return rates;
    
}

export default UseCurrencyInfo;