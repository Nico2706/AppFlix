import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { UserAuth } from '../Context/AUTHcontext'

const SingnUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user, singUp, } = UserAuth()
    const navigate = useNavigate()



    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            await singUp(email, password)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    

  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://www.xtrafondos.com/descargar.php?id=4196&resolucion=1920x1080" alt="background" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen '>
            <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16 '>

                    <h1 className='txt-3xl font-bold '> Sing Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col'>
                        <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                        <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit" className='bg-red-600 py-3 my-6 rounded font-bold uppercase'>Sing Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-2' type="checkbox"/>Remember Me</p>
                            <p className='text-gray-500 '>Need Help?</p>
                        </div>
                        <p className='py-4'><span className='text-gray-500'>Already subscribed to AppFlix?</span>{" "} <Link to="/login">Sing In</Link> </p>

                    </form>




                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SingnUp