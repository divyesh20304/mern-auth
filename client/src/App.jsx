import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div >
      <ToastContainer/>

      <Routes>
   
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Email-verify' element={<EmailVerify/>}/>
        <Route path='/Reset-password' element={<ResetPassword/>}/>
      </Routes>
  
    </div>
  )
}

export default App
