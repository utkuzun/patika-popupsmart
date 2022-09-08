import React from 'react'

import { Routes, Route } from 'react-router-dom'

import './App.css'
import MainPage from './components/MainPage'
import Login from './components/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<MainPage />} />
    </Routes>
  )
}

export default App
