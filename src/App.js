import React, { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import './App.css'
import MainPage from './components/MainPage'
import Login from './components/Login'

const App = () => {
  const [user, setUser] = useState({})

  useState(() => {
    const userExists = window.localStorage.getItem('userTodosPatika')

    if (userExists) {
      setUser(user)
    }
  })

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<MainPage user={user} />} />
    </Routes>
  )
}

export default App
