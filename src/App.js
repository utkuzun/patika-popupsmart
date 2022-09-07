import React, { useEffect, useState } from 'react'

import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import todosServices from './services/todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todosServices.getAll().then((data) => setTodos(data))
  }, [])

  const addTodo = async (content) => {
    const todoToAdd = { content, isCompleted: false }
    const todoAdded = await todosServices.create(todoToAdd)

    setTodos([...todos, todoAdded])
  }

  return (
    <div className='App'>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
