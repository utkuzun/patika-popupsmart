import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

import MainPage from './components/MainPage'
import Login from './components/Login'

const getTheme = () => {
  let theme = 'ligth-theme'

  const themeStore = window.localStorage.getItem('theme')

  if (themeStore) {
    return JSON.parse(themeStore).theme
  }

  return theme
}

const App = () => {
  const [theme, setTheme] = useState(getTheme())

  useEffect(() => {
    document.documentElement.className = theme
    window.localStorage.setItem('theme', JSON.stringify({ theme }))
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'ligth-theme' ? 'dark-theme' : 'ligth-theme'
    setTheme(newTheme)
  }

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route
        path='/'
        element={<MainPage toggleTheme={toggleTheme} theme={theme} />}
      />
    </Routes>
  )
}

export default App
