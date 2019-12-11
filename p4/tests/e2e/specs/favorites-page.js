describe('favorites-page', () => {

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

    //before we test the favorites list, lets add a recipe as a favorite
    it('add a recipe to the favorite list', () => {
        cy.visit('/');

        // add test recipe to favoritess
        cy.get('[data-test-id=' + recipe.id + "]").click();

        // test for toast message
        cy.contains('Recipe added to favorites');

        // test for favorites count
        cy.contains('[data-test-id="fav-count"]', 1);
    })

    it('shows recipe that was added to favorites list', () => {
        // Visit the favorites page
        cy.visit('/favorites');
        cy.contains("Here are all the favorites that you've saved so far.");
        cy.contains(recipe.name);

        // there should only be 1 favorite listed
        cy.get('[data-test="fav-name"]').its('length').should('be.eq', 1);
    })


    it('remove recipe from favorite list', () => {
        // Visit the favorites page
        cy.visit('/favorites');

        // check if recipe exists in list
        cy.contains(recipe.name);

        // show hidden button and remove recipe from list
        cy.get('[data-test-id=' + recipe.id + "]").invoke('show').click();

        // test for favorites count
        cy.contains('[data-test-id="fav-count"]', 0);

        // check if recipe exists after removing
        cy.contains(recipe.name).should('not.exist');
    })

})