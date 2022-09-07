import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <section>
      <h3>todos</h3>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  )
}

export default TodoList
