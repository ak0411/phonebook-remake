import React from 'react'

const Persons = ({ persons, handleDelete }) => {
  return (
    <table className="w-50">
      <tbody>
        {persons.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.number}</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(p)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Persons
