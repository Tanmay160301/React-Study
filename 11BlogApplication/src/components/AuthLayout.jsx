
/**
 * 
 * Ha flow nantr parat samju ghene
 * 
 * Ha component Routes sathi ek security mechanism mhnun ahe .. But I still did not understand its significance yet... te maybe nantr kalel
 * 
 * User jr authenticated asel trch pudhche pages or routes(aaple resources) show karyche else login/register karavun ghayycha 
 * 
 * If the user is not authenticated and authentication is true, it redirects to /login. If the user is authenticated and authentication is false, it redirects to /. During this process, it displays a loading message until the authentication status is determined. Once the status is determined, it renders the children passed to it.
 * 
 */
import React from 'react'
import { useEffect,useState } from 'react';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


export default function Protected({children , authentication = true}) {
    //Maybe ithe authentication means that user wants to enter the system in that case authentication is true(Wants to enter or use the system)

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status); 
    
    useEffect(() => {
    
        // In simple words maybe we are saying that jr user valid asel trch routes kade pathvudet like home page else login kade pathavu
        //Routing set up karat astana sagla kalun jail
        if (authentication && authStatus !== authentication) {
            //Maybe ithe user wants to enter the system that is why authentication true but tyala login chya process through jaila pahije as store madhle authStatus is false hence login component kade pathvla ahe 
            navigate('/login');
        }else if (!authentication && authStatus !== authentication) {
            //Maybe ithe authentication purna zalela ahe 
            navigate('/')
        }



        setLoader(false);
    }, [authentication,authStatus, navigate])
    
   

  return loader? <h1>Loading....</h1> : <div>{children}</div>
}

