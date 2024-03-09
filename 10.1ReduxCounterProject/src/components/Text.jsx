// import React from 'react'
import {useSelector} from "react-redux"

export default function Text() {
    
    const incrementValue = useSelector((state) => state.counter.value)//counter jo ahe
    //toh store madhun ghetla ahe 

    return (
        <>
            <h2>So this compoent can access current value of increment as {incrementValue}... and this is done without props</h2>
        </>
    )
}
