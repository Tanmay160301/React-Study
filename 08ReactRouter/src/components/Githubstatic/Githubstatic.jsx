/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import {useParams} from "react-router-dom"

export default function Github() {

    // let {username} = useParams();

    /**
     * Why useEffect wala code is commented?
     * -> because useEffect wala code tyavelich run honar jyaveli me link varti click karnar
     * mala desired behaviour asa hava ahe ki me maza mouse pointer jasa link varti annar tyavelich
     * data fetching cha kam chalu vhyala pahije... so The solution is to make use of Loader property
     * of Router
     * 
     */
    
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Tanmay160301`)
    //     .then( (response) => response.json() )
    //     .then( (data) => setData(data)  )
    // }, [])


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

export default fetchData ()