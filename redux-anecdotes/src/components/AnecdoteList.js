import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { addVote, initAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ anecdotesToShow, addVote, setNotification, initAnecdotes }) => {

  useEffect(() => {
    initAnecdotes()
  }, [initAnecdotes])

  const handleAddVote = (id) => {
    addVote(id)
    setNotification(`you voted anecdote #${id}`, 5)
  }

  const sortByVotes = (a, b) => b.votes - a.votes

  return (
    <div>
      {anecdotesToShow.sort(sortByVotes).map(anecdote =>
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

const anecdotesToShow = ( { anecdotes, filter }) => {
  console.log('anecdotes are: ', anecdotes);
  if (filter === null) {
    return anecdotes
  } else {
    return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
  }
}

const mapStateToProps = ({ anecdotes, filter }) => ({
  anecdotesToShow: anecdotesToShow({anecdotes, filter})
})

const mapDispatchToProps = {
  addVote,
  setNotification,
  initAnecdotes
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)