import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { UserAuth } from '../Context/AUTHcontext'

const Navigation = () => {

  const {user, logOut} = UserAuth()
  //console.log(user.email)

  const navigate = useNavigate()

  const handleLogout = async() =>{
    try {
        await logOut()
        navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute' >
    <Link to="">
    <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>AppFlix</h1>
    </Link>
   {user?.email ?  <div>
        <Link to="/account">
        <h1 className='bg-gray-600 px-6 py-2 rounded-xl cursor-pointer text-white opacity-60 hover:bg-gray-800'>{user.email}</h1>
        </Link>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-800' onClick={handleLogout}>Logout</button>
    </div> :  
    <div>
        <Link to="/login">
        <button className='text-white pr-3'>Sing In</button>
        </Link>
        <Link to="signup">
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-800'>Sing Up</button>
        </Link>
    </div>}

    </div>
  )
}

export default Navigation