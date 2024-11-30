import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './SignUp'
import Login from './Login'
import Logout from './Logout'

const Rout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </>
  )
}

export default Rout