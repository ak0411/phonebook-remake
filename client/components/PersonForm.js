import React, { useState } from 'react'

const PersonForm = ({ addPerson }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleAddPerson = (event) => {
    event.preventDefault()
    addPerson({ name, number })
    setName('')
    setNumber('')
  }

  return (
    <div>
      <h4>Add a new</h4>
      <form onSubmit={handleAddPerson} className="w-25">
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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
