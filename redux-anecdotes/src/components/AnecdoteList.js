import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { addNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ anecdotesToShow, addVote, addNotification, resetNotification }) => {

  const handleAddVote = (id) => {
    console.log('vote', id)
    addVote(id)
    addNotification(`you voted anecdote #${id}`)
    setTimeout(() => {
      resetNotification()
    }, 5000)
  }

  return (
    <div>
      {anecdotesToShow.map(anecdote =>
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
  addNotification,
  resetNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)