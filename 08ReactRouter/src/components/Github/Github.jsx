/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import {useParams} from "react-router-dom"

export default function Github() {

    let {username} = useParams();
    
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then( (response) => response.json() )
        .then( (data) => setData(data)  )
    }, [])


    return (
        <>
            <div className='my-10 container mx-auto text-center justify-center items-center space-x-4 font-bold flex flex-col md:flex-row'>
                <div>
                <img src={data.avatar_url} width={150} alt="" />
                </div>
                <div>
                <h1>Github Followers : {data.followers} </h1>
                </div>

            </div>
        </>
    )
}
