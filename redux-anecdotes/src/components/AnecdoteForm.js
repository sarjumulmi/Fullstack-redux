import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({store}) => {
  const handleNewAnecdote = e => {
    e.preventDefault()
    store.dispatch(addAnecdote(e.target.anecdote.value))
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

export default AnecdoteForm