import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const[FormData,setFormData]=useState({
        email:"",password:""
    })

    const[showPassword,setShowPassword]=useState(false);

    function changeHandler(event)
    {
        setFormData(prevState=>({ 
                ...prevState,[event.target.name]:event.target.value
            }))
    }


   function submitHandler(event)
   {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        // want to move from Login page to Dashboard page so that we can do by using 
        // useNavigate react hook
        const accountData={
          ...FormData
       };

       const finalData={
          ...accountData
       };

      console.log('Printing the final data after logIN')
       console.log(finalData);
        navigate('/dashboard');
   }

  return (
    <form onSubmit={submitHandler}
      className='flex flex-col gap-y-4 mt-6 w-full'
      >
        <label className='w-full'>
            <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-2'>Email Address
                <sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                name='email'
                type="email"
                value={FormData.email}
                placeholder='Enter email address'
                onChange={changeHandler}
                className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]
                  border-b-2 border-richblack-700'
           />  
        </label>

        <label className='w-full relative'>
            <p  className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-2'>Password<sup className='text-pink-200'>*</sup></p>
            <input 
                required
                name='password'
                type={showPassword ? ("text"):("password")}
                value={FormData.password}
                placeholder='Enter password '
                onChange={changeHandler}
                className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]
                  border-b-2 border-richblack-700'
      
           />  

           <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{setShowPassword(prev=>(!prev))}}>
                {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                 (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
           </span>

           <Link to='#'>
              <p className='text-xs text-blue-100 mt-1 max-w-max ml-auto'>
                Forget Password
              </p>
           </Link>
        </label>
        
        <button className='bg-yellow-50 rounded-[8px] px-[12px] py-[8px] text-richblack-900 font-medium mt-6'>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm
