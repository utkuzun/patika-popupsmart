import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, removeTodo, setFormToUpdate, updateTodo }) => {
  return (
    <section className='flex-col todo-list'>
      <h3>todos</h3>
      {todos
        .slice()
        .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            setFormToUpdate={setFormToUpdate}
            updateTodo={updateTodo}
          />
        ))}
    </section>
  )
}

export default TodoList
