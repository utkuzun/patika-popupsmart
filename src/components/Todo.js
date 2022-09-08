import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todo, removeTodo }) => {
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

  return (
    <section>
      <div>
        <h4>
          {id} {content} {isCompleted}
        </h4>
      </div>
      <div>
        <button onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </section>
  )
}

export default Todo
