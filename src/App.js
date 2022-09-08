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

  const removeTodo = async (id) => {
    await todosServices.remove(id)
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='App'>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  )
}

export default App
