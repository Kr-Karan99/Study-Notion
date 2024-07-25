import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const[showPassword,setShowPassword]=useState(false);
    const[showConfirmPassword,setshowConfirmPassword]=useState(false);
    const[formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        password:"",
        confirmPassword:"",
        email:""   
    })


    const navigate=useNavigate();
    function changeHandler(event)
    {
        setFormData(prev=>({
            ...prev,[event.target.name]:event.target.value
        }))
    }

    const[accountType,setAccountType]=useState("student");


    function submitHandler(event)
    {
        event.preventDefault();
        if(formData.confirmPassword!==formData.password)
         {
            toast.error("Password do not matched");
            return ;
         }

         setIsLoggedIn(true);
         toast.success("Account Created")
         const accountData={
            ...formData
         };

         const finalData={
            ...accountData,accountType
         };

        console.log('Printing the final data after signIn')
         console.log(finalData);
         navigate('/dashboard');



    }

  return (
    <div >
        {/* created 2 buttons for student and instructor */}
        <div className='flex bg-richblack-800 rounded-full p-1 gap-x-1 mt-3 max-w-max'>
            <button onClick={()=>{setAccountType("student")}}
             className={`${accountType==='student' ?
                "bg-richblack-900 text-richblack-5" : "bg-richblack-800 text-richblack-200 "
             } rounded-full py-2 px-5 transition-all duration-200`}>
                Student
            </button>
            <button onClick={()=>{setAccountType("instructor")}}
              className={`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5" : 
                "bg-richblack-800 text-richblack-200"} rounded-full py-2 px-5 transition-all duration-200`}  
                >Instructor</button>
        </div>

        <form onSubmit={submitHandler}
        // className='flex flex-col gap-y-4 mt-6 w-full'
         >
            {/* created the first and last name field */}
           <div className='flex gap-x-4'>
                <label className='w-full'>
                <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-2'>First Name<sup className='text-pink-200'>*</sup> </p>
                <input type="text" 
                    required
                    name='firstName'
                    placeholder='Enter First Name'
                    onChange={changeHandler}
                    value={formData.firstName}
                    className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]
                  border-b-2 border-richblack-700'
                   />
                </label>

                <label className='w-full'>
                    <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-2'>Last Name<sup className='text-pink-200'>*</sup> </p>
                    <input type="text" 
                        required
                        name='lastName'
                        placeholder='Enter Last Name'
                        onChange={changeHandler}
                        value={formData.lastName}
                        className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]
                  border-b-2 border-richblack-700'
                    />
                </label>
           </div>
           {/* created the input field for the email address */}
            <label className='w-full'>
                <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-2'>Email<sup className='text-pink-200'>*</sup> </p>
                <input type="email" 
                    required
                    name='email'
                    placeholder='Enter Email Address'
                    onChange={changeHandler}
                    value={formData.email}
                      className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]
                  border-b-2 border-richblack-700'
                   />
            </label>

            {/* create and confirm password field */}
           
            <div className='flex gap-x-4'>
                
            <label  className='relative w-full'>
                <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-2'>Create Password<sup className='text-pink-200'>*</sup> </p>
                <input 
                    type={showPassword ? ("text"):("password")}
                    required
                    name='password'
                    placeholder='Enter Password'
                    onChange={changeHandler}
                    value={formData.password}
                      className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]
                  border-b-2 border-richblack-700'
                   />

                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={()=>{setShowPassword(prev=>(!prev))}}>
                      {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                    </span>
            </label>

            <label  className='relative w-full'>
                <p className='text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-2'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                <input 
                    type={showConfirmPassword ? ("text"):("password")}
                    required
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    onChange={changeHandler}
                    value={formData.confirmPassword}
                      className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]
                  border-b-2 border-richblack-700'
                   />

                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={()=>{setshowConfirmPassword(prev=>(!prev))}}>
                      {showConfirmPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) 
                       : (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                    </span>
            </label>

            </div>
            <button className='bg-yellow-50 rounded-[8px] px-[12px] py-[8px] w-full text-richblack-900 font-medium mt-6'>
                Create Account</button>
        </form>


    </div>
  )
}

export default SignupForm
