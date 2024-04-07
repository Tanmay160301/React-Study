import React from 'react'
import { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import {Button,Input,Logo} from '../components/index'
import {useDispatch} from 'react-redux'
import { LoginReducer } from '../store/AuthSlice/authSlice'

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {register, handleSubmit} = useForm();
    const [errors, setErrors] = useState("");
    
    //ha data jo ahe toh aplyala form madhun milnar
    const registerUser = async(data) => {
        console.log(data);
        setErrors("");
        try {
            //Faith thevuya ki form fill up karun ala ahe and data madhe sagle values ahet
            const user = await authService.createAccount(data)

            console.log("User is" + user)

            //Store madhe data ghalun thevooyat
            if (user) {
                const userData = authService.getCurrentUser();
                if (userData) {
                    dispatch(LoginReducer(userData));
                }
                navigate('/');// Tyana register karvun direct home page la send kelela ahe 
            }
            else
            {
                setErrors('Failed to create Account')
            }

        } catch (error) {
            setErrors(error.message);
        }
    }
  return (
    <div className='w-full flex justify-center items-center '>
        <div className='mx-auto w-full  max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="100%"/>
                </span>

            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Register to your Account</h2>

            <p className="mt-2 text-center text-base text-black/60">
                    Already have any account?&nbsp;
                    <Link
                    to={'/login'}
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                    Login
                    </Link>
        </p>
        {errors && <p className='text-red-600 mt-8 text-center'>{errors}</p> }

        <form onSubmit={handleSubmit(registerUser)} >
            <div className='mt-8 space-y-4'>
            <Input 
            label="Full Name: "
            placeholder = "Enter your Full Name"
            type="text"
            {...register("name",{
                required:true,
            })}
            />
            <Input 
            label="Email ID : "
            placeholder = "Enter your Email ID"
            type="email"
            {...register("email",{
                required:true,
                validate: {
                    matchPattern:  (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                }
            })}
            />
            <Input 
            label="Password: "
            type = "password"
            placeholder = "Enter your password"
            {...register("password",{
                required:true,
            })}
            />

            <Button type="submit" className="w-full">Create Account</Button>
            </div>
        </form>

        </div>

    </div>
    // <div>
    //     <div className="">
    //         {errors && <p>{errors}</p> }
    //     </div>
    //     <Form onSubmit= {handleSubmit(registerUser)}>
            
    //     </Form>
    // </div>
  )
}

export default Signup