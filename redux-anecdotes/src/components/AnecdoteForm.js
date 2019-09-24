import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ addAnecdote, setNotification }) => {
  const handleNewAnecdote = async (e) => {
    e.preventDefault()
    const content  = e.target.anecdote.value
    e.target.anecdote.value = ''
    addAnecdote({ content })
    setNotification(`new anecdote ${content} added`, 3)
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
        <div>Anecdote: <input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addAnecdote,
  setNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)