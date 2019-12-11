describe('home-page', () => {

  ///////////////////////////////////////////////////////
  // retain localStorage state before/after each test
  ///////////////////////////////////////////////////////
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  afterEach(() => {
    cy.saveLocalStorageCache();
  });


  let recipe = {
    id: 'grand-marnier-coffee-ice-cream',
    name: "Grand Marnier & Coffee Ice Cream"

  }

  it('visit the homepage', () => {
    cy.visit('/')
    cy.contains('The RecipeBook is your one-stop-shop for convenient online grocery shopping in the greater Boston area.');
  })


  it('favorites and shopping list counts are zero', () => {
    // test for favorites count
    cy.contains('[data-test-id="fav-count"]', 0);
    // test for favorites count
    cy.contains('[data-test-id="shop-count"]', 0);
  })


  //before we test the favorites list, lets add a recipe as a favorite
  it('add a recipe to the favorite list', () => {
    // add test recipe to favoritess
    cy.get('[data-test-add-to-fav-button-id=' + recipe.id + "]").click();
    // test for toast message
    cy.contains('Recipe added to favorites');
    // test for favorites count
    cy.contains('[data-test-id="fav-count"]', 1);
  })


  it('favorite link navigates to favorite page', () => {
    cy.get('[data-test-nav-link="favorites"]').click();
    cy.url().should('include', "favorites");
  })


  it('shopping list link navigates to shop link page', () => {
    cy.get('[data-test-nav-link="shopping list"]').click();
    cy.url().should('include', "shopping-list");
  })


  it('clicking on recipe shows recipe detail page', () => {
    cy.visit('/');
    cy.get('[data-test-recipe-id=' + recipe.id + ']').click();
    cy.url().should('include', recipe.id);
  })

})
