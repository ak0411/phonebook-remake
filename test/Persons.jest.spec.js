import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Persons from '../client/components/Persons'

const personList = [
  {
    name: 'Anna',
    number: '040-1234556',
    id: '655dd85579c1108350110ed7'
  },
  {
    name: 'Arto Vihavainen',
    number: '045-1232456',
    id: '655dd8a90c0cda5315ab3521'
  },
  {
    name: 'Ada Lovelace',
    number: '040-1231236',
    id: '655dd8bbc83c10cfeb33b637'
  },

]

describe('<Persons />', () => {
  test('should render persons', () => {
    const onDelete = jest.fn()

    render(
      <Persons
        persons={personList}
        handleDelete={onDelete}
      />
    )
    expect(screen.getByText('Anna')).toBeDefined()
    expect(screen.getByText('Arto Vihavainen')).toBeDefined()
    expect(screen.getByText('Ada Lovelace')).toBeDefined()
  })
})