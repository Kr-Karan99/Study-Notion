import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import { FcGoogle } from "react-icons/fc";
import LoginForm from './LoginForm'
const Tamplate = ({title,desc1,desc2,formType,image,setIsLoggedIn}) => {
  return (
    <div className='flex max-w-[1160px] mx-auto w-11/12 gap-x-12 py-2 gap-y-0 justify-between flex-wrap'>
         <div className='w-11/12 max-w-[450px]'>
            <p className='text-richblack-5 text-[1.875rem] font-semibold leading-[2.375rem]'>

                {title}

            </p>


            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>

                <span className='text-richblack-100'>

                     {desc1}

                </span>
                <br />
                <span className='text-blue-100 italic'>

                    {desc2}

                </span>

            </p>
            {
                formType==="signup" ? 
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div className='flex w-full items-center gap-x-2 my-4'>

                <div className='bg-richblack-700 w-full h-[1px]' ></div> {/*here this two divs are created to create the line */}

                <p className='text-richblack-700'>
                    OR
                </p>

                <div className='bg-richblack-700 w-full h-[1px]'></div>

            </div>

            <button className='flex items-center justify-center w-full border rounded-[8px] text-richblack-100 gap-x-2 border-richblack-700
             mt-6 font-medium px-[12px] py-[8px]'>
               <FcGoogle />
                <p>
                    Sign Up With Google
                </p>
            </button>
         </div>

         <div className='relative w-11/12 max-w-[450px] mt-10' >
            <img src={frameImage} 
            alt="pattern" 
            width={558}
            height={504}
            loading='lazy'/>

            <img src={image} 
            alt="students" 
            width={558}
            height={504}
            loading='lazy'
            className='absolute -top-4 right-4'
            />


         </div>
    </div>
  )
}

export default Tamplate
