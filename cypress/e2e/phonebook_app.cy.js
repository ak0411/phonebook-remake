/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
describe('Phonebook app', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8000')
    cy.contains('Phonebook')
  })
})