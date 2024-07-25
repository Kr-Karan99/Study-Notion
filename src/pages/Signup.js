import React from 'react'
import Tamplate from '../components/Tamplate'
import signupImg from '../assets/signup.png'
const Signup = ({setIsLoggedIn}) => {
  return (
    <Tamplate
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build Skills for today, tommorow and beyond."
      desc2="Education to future-proof your carrier."
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      image={signupImg}
    />
  )
}

export default Signup
