import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ addAnecdote }) => {
  const handleNewAnecdote = e => {
    e.preventDefault()
    addAnecdote(e.target.anecdote.value)
    e.target.anecdote.value = ''
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
  addAnecdote
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)