import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div>
      { notification.msg ? (
        <div style={style}>
          {notification.msg}
        </div>
        ) : null
      }
    </div>
  )
}

const mapStateToProps = ({ notification }) => ({
  notification
})

export default connect(mapStateToProps)(Notification)