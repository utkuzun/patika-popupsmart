/* eslint-disable react/display-name */
import React, { useState, useImperativeHandle, forwardRef } from 'react'

const TodoForm = forwardRef(({ addTodo, updateTodo }, refs) => {
  const [content, setContent] = useState('')
  const [editTodo, setEditTodo] = useState({})

  const [mode, setMode] = useState('submit')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addTodo(content)
      setContent('')
    } catch (error) {
      console.log(error)
    }
  }
  const handleEdit = async (e) => {
    e.preventDefault()

    try {
      await updateTodo(editTodo.id, { ...editTodo, content })
    } catch (error) {
      console.log(error)
    }
    e.preventDefault()
    setContent('')
    setMode('submit')
  }

  useImperativeHandle(refs, () => {
    return { setMode, content, setContent, setEditTodo }
  })
  return (
    <section>
      <form onSubmit={mode === 'submit' ? handleSubmit : handleEdit}>
        <input
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit'>{mode === 'submit' ? 'submit' : 'edit'}</button>
      </form>
    </section>
  )
})

export default TodoForm
