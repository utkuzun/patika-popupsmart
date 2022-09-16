import React, { useEffect, useState, useRef } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

import todosServices from '../services/todos'

const MainPage = ({ user, toggleTheme, theme }) => {
  const [todos, setTodos] = useState([])

  const formRef = useRef()

  const navigate = useNavigate()

  useEffect(() => {
    todosServices.getAll().then((data) => setTodos(data))
  }, [])

  const addTodo = async (content) => {
    const todoToAdd = { content, isCompleted: false }
    const todoAdded = await todosServices.create(todoToAdd)

    setTodos([...todos, todoAdded])
  }

  const removeTodo = async (id) => {
    await todosServices.remove(id)
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const setFormToUpdate = async (todo) => {
    formRef.current.setMode('edit')
    formRef.current.setContent(todo.content)
    formRef.current.setEditTodo(todo)
  }

  const updateTodo = async (id, todo) => {
    const todoUpdated = await todosServices.update(id, todo)
    const newTodos = todos.map((todo) =>
      todo.id === todoUpdated.id ? todoUpdated : todo
    )
    setTodos(newTodos)
  }

  const logout = () => {
    window.localStorage.setItem('userTodosPatika', JSON.stringify({}))
    navigate('/login')
  }

  return (
    <main className={'App'}>
      {user.username ? (
        <div className='nav-info'>
          <div className='flex'>
            <p>welcome {user.username}</p>
            <div className='theme-button flex' onClick={toggleTheme}>
              <div
                className={`slider ${theme === 'dark-theme' ? 'active' : ''}`}
              ></div>
              <FontAwesomeIcon icon={faSun} />
              <FontAwesomeIcon icon={faMoon} />
            </div>
          </div>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div className='nav-info'>
          <Link to='/login'>Enter a username for better experience</Link>
        </div>
      )}
      <TodoForm addTodo={addTodo} ref={formRef} updateTodo={updateTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        setFormToUpdate={setFormToUpdate}
        updateTodo={updateTodo}
      />
    </main>
  )
}

export default MainPage
