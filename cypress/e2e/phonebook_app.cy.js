/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
describe('Phonebook app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:8000/api/testing/reset')
    const person = {
      name: 'Bob',
      number: '123-4567890'
    }
    cy.request('POST', 'http://localhost:8000/api/persons', person)
    cy.visit('http://localhost:8000')
  })

  it('front page can be opened', function() {
    cy.contains('Phonebook')
    cy.contains('Bob')
    cy.contains('123-4567890')
  })

  it('user can add a person', function() {
    cy.get('#name').type('Alice')
    cy.get('#number').type('012-3456789')
    cy.get('#add-button').click()

    cy.contains('Alice')
    cy.contains('123-4567890')
  })

  it('user can remove a person', function() {
    cy.contains('Delete').click()
    cy.contains('Deleted Bob')
    cy.contains('123-4567890').should('not.exist')
  })
})