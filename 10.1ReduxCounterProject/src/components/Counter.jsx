// import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment, incrementByValue } from "../states/counter/counterSlice";
import { incrementAsync } from "../states/counter/counterSlice";

export default function Counter() {

    /**
     * Our react components are communicating with the redux store via 
     * useSelectors or useDispatch... These hooks are available from react-redux package/module
     * useSelector cha use karun aplyala state chi current value access karta yete
     * useDispatch cha use karun store madhlya state chi value update karta yete
     * 
     */
    const counter = useSelector((state) => state.counter.value)//ithe counter je aahe te store madhun aalay
    //reducer chi key use keli ahe

    const dispatch = useDispatch();
    
    return (
        <>
        <button onClick={() => dispatch(increment())}>Increment</button>
       <h2>{counter}</h2> 
       <button onClick={() => dispatch(decrement())}>Decrement</button>
       <button onClick={() => dispatch(incrementByValue(10))}>Increment By Value 10</button>
       <button onClick={() => dispatch(incrementAsync(100))}>Asynchronous Increment by 100</button>
        </>
    )
}
