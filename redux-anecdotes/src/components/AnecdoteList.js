import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({store}) => {
  const anecdotes = store.getState()

  const handleAddVote = (id) => {
    console.log('vote', id)
    store.dispatch(addVote(id))
  }

  return (
    <div>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => handleAddVote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
}

export default AnecdoteList