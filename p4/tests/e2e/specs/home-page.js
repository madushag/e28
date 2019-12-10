describe('Home Page', () => {
  it('Visit the homepage', () => {
    cy.visit('/')
    cy.contains('The RecipeBook is your one-stop-shop for convenient online grocery shopping in the greater Boston area.');
  })
})
