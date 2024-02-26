import React from 'react'
import { UserContext } from '../context/UserContext'

export default function DashBoard() {

    //These are child components which are consuming the context
    const {Username,Password , setPassword} = React.useContext(UserContext);

    const handleUpdate = () => setPassword("good");

    return (
        <>
        <div>
        <p className='text-4xl'>Hello {Username}, Your new Password could be  {Password}</p>
        <button onClick={handleUpdate}>Update</button>

        </div>
        </>
    )
}
