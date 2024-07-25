import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';

const Navbar = (props) => {
let isLoggedIn=props.isLoggedIn;
let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-4 mx-auto items-center'>

        <Link to='/'>
            <img src={Logo} alt="logo" width={160} height={30} loading='lazy' />
        </Link>

        <nav>

            <ul className='flex gap-x-6 text-richblack-100'>

                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/'>About</Link>
                </li>

                <li>
                    <Link to='/'>Contact</Link>
                </li>
               
            </ul>

        </nav>

        {/* now creating the four buttons 
        that is login, logout, sign in and Dashboard */}

        <div className='flex items-center gap-x-4'>

            { isLoggedIn===false &&
              <Link to="/login">

                <button className='text-richblack-100 bg-richblack-800
                  py-[8px] px-[12px] 
                  rounded-[8px] border
                 border-richblack-700'>
                    Log in
                </button>

              </Link>
            }

            {  isLoggedIn===false &&
              <Link to="/signup">

                <button className='text-richblack-100 bg-richblack-800
                        py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                </button>

               </Link>
            }

            {  isLoggedIn===true && 
                <Link to="/">


                    <button  onClick={()=>{

                        setIsLoggedIn(false) 
                        toast.success("Logged Out");

                    }} 
                    className='text-richblack-100 bg-richblack-800 py-[8px] px-[12px]
                     rounded-[8px] border  border-richblack-700'>

                        Log out

                    </button>


                </Link>
           }

           {   isLoggedIn===true &&
                <Link to="/dashboard">

                    <button className='text-richblack-100 bg-richblack-800 py-[8px] 
                    px-[12px] rounded-[8px] border  border-richblack-700'>

                        Dashboard

                    </button>

                </Link>
            }
            
        </div>


    </div>
  )
}

export default Navbar
