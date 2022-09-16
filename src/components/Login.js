import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Login = ({ setUser }) => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const { displayError } = useGlobalContext()

  const handleLogin = (e) => {
    e.preventDefault()

    if (username.length < 3) {
      displayError({
        message: 'Enter a username has letters more than 3!!',
        type: 'error',
      })
      return
    }

    const user = { username }
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
            minLength='3'
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>login</button>
        </div>
      </form>
    </main>
  )
}

export default Login
