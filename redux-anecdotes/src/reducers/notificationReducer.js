const initialState = {
  type: null,
  msg: null
}

export const addNotification = msg => (
  {
    type: 'SET_MESSAGE',
    payload: { type: 'info', msg }
  }
)

export const resetNotification = () => (
  {
  type: 'RESET_MESSAGE'
  }
)

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.payload
    case 'RESET_MESSAGE':
      return {
        type: null,
        msg: null
      }
    default:
      return state
  }
}

export default notificationReducer