import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, removeTodo, setFormToUpdate }) => {
  return (
    <section>
      <h3>todos</h3>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          setFormToUpdate={setFormToUpdate}
        />
      ))}
    </section>
  )
}

export default TodoList
