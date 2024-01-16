import React from 'react'

const Filter = ({ value, onChange }) => {
  return (
    <div className="input-group w-25">
      <input
        type="search"
        className="form-control"
        placeholder="Search name"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Filter