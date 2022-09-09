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
      setContent('')
      setMode('submit')
      setEditTodo({})
    } catch (error) {
      console.log(error)
    }
  }

  useImperativeHandle(refs, () => {
    return { setMode, content, setContent, setEditTodo }
  })
  return (
    <section className='flex-col'>
      <form onSubmit={mode === 'submit' ? handleSubmit : handleEdit}>
        <div className='form-input'>
          <label htmlFor='content'>{mode === 'submit' ? 'Add' : 'Edit'}</label>
          <input
            className='form-content'
            type='text'
            name='content'
            value={content}
            minLength='3'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type='submit'>{mode === 'submit' ? 'submit' : 'edit'}</button>
      </form>
    </section>
  )
})

export default TodoForm
