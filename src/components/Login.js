import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const user = { username, screenMode: 'ligth' }
    window.localStorage.setItem('userTodosPatika', JSON.stringify(user))
    setUser(user)
    navigate('/')
  }

  return (
    <main className='App'>
      <form onSubmit={handleLogin} className='login-form'>
        <div className='form-input'>
          <input
            className='form-content'
            type='text'
            value={username}
            minLength='5'
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>login</button>
        </div>
      </form>
    </main>
  )
}

export default Login
