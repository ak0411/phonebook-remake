import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PersonForm from '../client/components/PersonForm'

describe('<PersonForm />', () => {
  test('updates parent state and calls onSubmit', async () => {
    const addPerson = jest.fn()
    const user = userEvent.setup()

    render(<PersonForm addPerson={addPerson} />)

    const name = screen.getByPlaceholderText('Name')
    const number = screen.getByPlaceholderText('Number')
    const submitButton = screen.getByText('Add')

    await user.type(name, 'Bob')
    await user.type(number, '000-0000000')
    await user.click(submitButton)

    expect(addPerson.mock.calls).toHaveLength(1)
    expect(addPerson.mock.calls[0][0].name).toBe('Bob')
    expect(addPerson.mock.calls[0][0].number).toBe('000-0000000')
  })
})