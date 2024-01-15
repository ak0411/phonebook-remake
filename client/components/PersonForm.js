import React from 'react'

const PersonForm = ({
  onSubmit, valueName, onChangeName, valueNumber, onChangeNumber
}) => {
  return (
    <div>
      <h4>Add a new</h4>
      <form onSubmit={onSubmit} className="w-25">
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={valueName}
            onChange={onChangeName}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Number"
            value={valueNumber}
            onChange={onChangeNumber}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
