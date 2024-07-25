import React from 'react'
import { Navigate } from 'react-router-dom';
const PrivateRoutes = ({isLoggedIn,children}) => {
    if(isLoggedIn)
        {
            return children;
        }
        else{
            return  <Navigate to='/login' />;
        }
}

export default PrivateRoutes
