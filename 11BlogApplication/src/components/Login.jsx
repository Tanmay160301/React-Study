
import React from 'react'
import { useState } from 'react'
import authService from '../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import { LoginReducer } from '../store/AuthSlice/authSlice'
import {useDispatch} from 'react-redux'
import {Logo, Button , Input} from './index'
import {useForm} from 'react-hook-form'


function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {register, handleSubmit} = useForm();
    const [errors , setErrors] = useState("");

    //Ithe me ek asa submit kelyavrcha function lihinar ahe je internally will make use of database services which are asynchronous which we had written .. so I will make that function async  
    const handleLogin = async (data) => {

        //form submit zalyavr ha code run honar
        setErrors("");
        console.log(data);

        try {
            const session = await authService.login(data);// aplyala tya user cha session(in the form of sessionId) parat milnar or jr nasel tr create karun milnar

            // console.log("session is "+session)
            
            if (session) {
                // tya corresponding session cha data gheuyat from appwrite
                //Appwrite tyala by default authenticate karun thevtay ani tyacha session la pn track karun thevtay
                const userData = await authService.getCurrentUser()
                console.log("Tanny")
                
                if (userData) {
                    console.log(userData);
                    dispatch(LoginReducer({userData}));// store madhla data update  
                }
                navigate('/');// navigate to home page
            }

        } catch (error) {
            //error ha ek object ahe whose value we can access using error.message
            setErrors(error.message);
        }
    }

  return (

    <div className='w-full my-8 flex justify-center items-center'>
        <div className='mx-auto w-full  max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="100%"/>
                </span>

            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your Account</h2>

            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                    to={'/signup'}
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                    Sign up
                    </Link>
        </p>
        {errors && <p className='text-red-600 mt-8 text-center'>{errors}</p> }

        <form onSubmit={handleSubmit(handleLogin)}>
            <div className='mt-8 space-y-4'>
                <Input  
                label = "Email: "
                type = "email"
                placeholder = "Enter your Email"
                {...register("email", {
                    required:true,
                    //validate is an object of callback functions 
                    //source:https://react-hook-form.com/docs/useform/register
                    //validate jr barobar asel tr ahe ti value return honar and if not then Error message return honar
                    validate: {
                        matchPattern:  (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Please Enter a valid Email Address"
                        
                    }
                })}
                />

                <Input 
                label= "Password: "
                type = "password"
                placeholder = "Enter your password"
                {...register("password" , {
                    required:true,
                    minLength:8
                })}
                />

                <Button className='w-full mt-4' type='submit'>
                    Log in
                </Button>
            </div>
        </form>

        </div>

    </div>

  )
}

export default Login