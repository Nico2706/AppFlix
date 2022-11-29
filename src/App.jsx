import React from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom"
import { AuthContextProvider } from './Context/AUTHcontext'
import SingnUp from './pages/SingnUp'
import Account from './pages/Account'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'





const App = () => {
  return (
    <>
    <AuthContextProvider>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SingnUp/>}/>
      <Route path='/account' element={<ProtectedRoutes><Account/></ProtectedRoutes> }/>
    </Routes>
    </AuthContextProvider>


    </>
  )
}

export default App
