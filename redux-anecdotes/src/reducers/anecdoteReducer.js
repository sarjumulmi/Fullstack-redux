import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const addVote = id => {
  return async (dispatch) => {
    await anecdoteService.update(id)
    dispatch({
      type: 'VOTE',
      payload: { id }
    })
  }
}

export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes  = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      payload: anecdotes
    })
  }
}

export const addAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote  = await anecdoteService.create(anecdote)
    dispatch({
      type: 'ADD',
      payload: newAnecdote
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.payload
    case 'VOTE':
      let votedAnecdote = state.find(a => a.id === action.payload.id)
      votedAnecdote.votes = votedAnecdote.votes + 1
      return state.map(a => a.id !== action.payload.id ? a : votedAnecdote)
    case 'ADD':
      return [...state, action.payload]
    default:
      return state
  }
}

export default anecdoteReducer