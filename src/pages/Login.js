import React from 'react'
import loginImg from '../assets/login.png'
import Tamplate from '../components/Tamplate'

const Login = ({setIsLoggedIn}) => {
  return (
    <Tamplate
     desc1="Build Skills for today, tommorow and beyond."
     desc2="Education to future-proof your carrier."
     title="Welcome Back"
     image={loginImg}
     setIsLoggedIn={setIsLoggedIn}
     formType="login"
    />
  )
}

export default Login
