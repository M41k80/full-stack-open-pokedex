/* global cy, describe, it */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('/')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.') // Verifica el texto del footer
  })
})

it('can navigate to a particular Pokemon', function() {
  cy.visit('http://localhost:5000')
  cy.contains('ivysaur').click()
  cy.contains('chlorophyll')
})
