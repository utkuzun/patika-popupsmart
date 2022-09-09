import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faEdit,
  faCheck,
  faX,
} from '@fortawesome/free-solid-svg-icons'

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
    <article className='todo-item'>
      <p className={`todo-content ${isCompleted ? 'completed' : ''}`}>
        {content}
      </p>
      <div>
        <button className='icon-button delete' onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className='icon-button edit' onClick={handleUpdate}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className='icon-button mark' onClick={updateIsComplete}>
          {!isCompleted ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faX} />
          )}
        </button>
      </div>
    </article>
  )
}

export default Todo
