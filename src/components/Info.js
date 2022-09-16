import React from 'react'
import { useGlobalContext } from '../context'

const Info = () => {
  const { error } = useGlobalContext()
  const { message, type } = error

  if (!message) {
    return null
  }

  return (
    <div className={`info-section flex ${status}`}>
      <p className={` flex ${type}`}>{message}</p>
    </div>
  )
}

export default Info
