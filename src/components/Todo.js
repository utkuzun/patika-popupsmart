import React from 'react'

const Todo = ({ todo }) => {
  const { id, content, isCompleted } = todo
  return (
    <h4>
      {id} {content} {isCompleted}
    </h4>
  )
}

export default Todo
