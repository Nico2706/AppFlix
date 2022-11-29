import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Context/AUTHcontext'

const ProtectedRoutes = ({children}) => {

    const {user} = UserAuth()

    if(!user){
        return <Navigate to="/"/>
    }else{
        return children;
    }
}
  
export default ProtectedRoutes