import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addTodo(content)
      setContent('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit'>submit</button>
      </form>
    </section>
  )
}

export default TodoForm
