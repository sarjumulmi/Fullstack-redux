import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

const create = async (data) => {
  const anecdote = { ...data, votes: 0 }
  const resp = await axios.post(baseUrl, anecdote)
  console.log('new anecdote: ', resp);
  return resp.data
}

const update = async (id) => {
  const currentAnecdote = (await axios.get(`${baseUrl}/${id}`)).data
  const updatedAnecdote = await axios.put(`${baseUrl}/${id}`, { ...currentAnecdote, votes: currentAnecdote.votes +1 })
  return updatedAnecdote.data
}

export default {
  getAll, create, update
}