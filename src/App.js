import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

import MainPage from './components/MainPage'
import Login from './components/Login'

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const userExists = window.localStorage.getItem('userTodosPatika')

    if (userExists) {
      setUser(JSON.parse(userExists))
    }
  }, [])

  return (
    <Routes>
      <Route path='/login' element={<Login setUser={setUser} />} />
      <Route path='/' element={<MainPage user={user} />} />
    </Routes>
  )
}

export default App
