import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './Pages/Chat';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register';

function App() {
  return (

    <>
    
    <BrowserRouter>
    <Routes>

      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Chat/>}></Route>

    </Routes>
  </BrowserRouter>

    </>


  )
}

export default App