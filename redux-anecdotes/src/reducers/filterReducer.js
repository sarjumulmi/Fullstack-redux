export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  payload: filter
})

const filterReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
     return action.payload
    default:
     return state
  }
}

export default filterReducer