import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const user = { username, screenMode: 'ligth' }
    window.localStorage.setItem('userTodosPatika', JSON.stringify(user))
    navigate('/')
  }

  return (
    <main className='App'>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          value={username}
          minLength='5'
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>login</button>
      </form>
    </main>
  )
}

export default Login
