import { Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="flex  flex-col w-[100%] h-[100%] bg-richblack-900">

        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/dashboard' element={
          <PrivateRoutes isLoggedIn={isLoggedIn}>
                        <Dashboard/>
          </PrivateRoutes>
          
          }></Route>

        </Routes>
    </div>
  );
  
}

export default App;
