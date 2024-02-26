// import  {useState} from 'react'
import { useUserContext } from '../context/UserContext'



export default function Profile() {
        //These are child components which are consuming the context
    const {Username, Password} =useUserContext();
    

    return (
        <>
        <h1>Hi {Username} , Your password is {Password}</h1>
            
        </>
    )
}
