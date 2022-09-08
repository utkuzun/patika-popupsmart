import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todo, removeTodo, setFormToUpdate, updateTodo }) => {
  const { id, content, isCompleted } = todo

  const handleRemove = async () => {
    if (window.confirm(`delete ${content}`)) {
      try {
        await removeTodo(id)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleUpdate = async () => {
    try {
      await setFormToUpdate(todo)
    } catch (error) {
      console.log(error)
    }
  }

  const updateIsComplete = async () => {
    try {
      await updateTodo(id, { content, id, isCompleted: !isCompleted })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <div
        className={`todo-content ${isCompleted ? 'completed' : ''}`}
        onClick={updateIsComplete}
      >
        <h4>{content}</h4>
      </div>
      <div>
        <button onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button onClick={handleUpdate}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </section>
  )
}

export default Todo
