import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const Filter = ({ changeFilter }) => {
  const handleChange = e => {
    changeFilter(e.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  changeFilter
}

export default connect(null, mapDispatchToProps)(Filter)