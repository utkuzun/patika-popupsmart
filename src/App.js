import React, { useState } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import MainPage from './components/MainPage'
import Login from './components/Login'

const App = () => {
  const [user, setUser] = useState({})

  useState(() => {
    const userExists = window.localStorage.getItem('userTodosPatika')

    if (userExists) {
      setUser(JSON.parse(userExists))
    }
  })

  return (
    <Routes>
      <Route path='/login' element={<Login setUser={setUser} />} />
      <Route
        path='/'
        element={
          user.username ? (
            <MainPage user={user} />
          ) : (
            <Navigate replace to='/login' />
          )
        }
      />
    </Routes>
  )
}

export default App
