import React, { useEffect, useState, useRef } from 'react'

import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import todosServices from './services/todos'

const App = () => {
  const [todos, setTodos] = useState([])

  const formRef = useRef()

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

  return (
    <div className='App'>
      <TodoForm addTodo={addTodo} ref={formRef} updateTodo={updateTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        setFormToUpdate={setFormToUpdate}
      />
    </div>
  )
}

export default App
