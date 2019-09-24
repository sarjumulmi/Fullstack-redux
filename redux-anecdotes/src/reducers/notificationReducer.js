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

export const setNotification = (msg, secs) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_MESSAGE',
      payload: { type: 'info', msg }
    })
    setTimeout(() => {
      dispatch({
        type: 'RESET_MESSAGE'
      })
    }, secs * 1000);

  }
}

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