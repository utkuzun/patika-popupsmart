import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [error, setError] = useState({ message: '', type: '' })
  const [user, setUser] = useState({})

  const displayError = ({ message, type }) => {
    setError({ message, type })

    setTimeout(() => {
      setError({ message: '', type: '' })
    }, [4000])
  }

  return (
    <AppContext.Provider value={{ error, displayError, user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
