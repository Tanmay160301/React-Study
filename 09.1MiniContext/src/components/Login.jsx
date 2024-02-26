/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext, useUserContext } from '../context/UserContext'

//Child component ahe
export default function Login() {

    //These are child components which are consuming the context
    const {Username, Password , setUsername, setPassword} = useContext(UserContext);

    const handleEvent = (e) => {
        e.preventDefault();
        const nav = document.querySelector('#name').value;
        const password = document.querySelector('#pass').value;

        setUsername(nav);
        setPassword(password);


    }
    
    return (
        <>
        <form action="">
            <input type="text" name=""    id="name" />
            <input type="text" name=""  id="pass" />
            <button onClick={handleEvent}>Submit</button>
        </form>
            
        </>
    )
}
