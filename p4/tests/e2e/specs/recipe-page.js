describe("recipe-page", () => {
	///////////////////////////////////////////////////////
	// retain localStorage state before/after each test
	///////////////////////////////////////////////////////
	beforeEach(() => {
		cy.restoreLocalStorageCache();
	});

	afterEach(() => {
		cy.saveLocalStorageCache();
	});

	let testRecipe = {
		id: "grand-marnier-coffee-ice-cream",
		name: "Grand Marnier & Coffee Ice Cream",
		description: "Easy and decadent!"
	};

	it("show recipe details", () => {
		// Visit the recipe detail page
		cy.visit("/recipes/" + testRecipe.id);
		cy.contains(testRecipe.name);
		cy.contains(testRecipe.description);
		cy.contains("Ingredients");

		// check the count of ingredients
		cy.get('[data-test-id="ingredient"]')
			.its("length")
			.should("be.eq", 7);

		//check for control ingredient in list
		cy.get("[data-test-ingredient-name='heavy cream']")
			.its("length")
			.should("be.eq", 1);

		// check the count of steps
		cy.get('[data-test-id="steps"]')
			.its("length")
			.should("be.eq", 5);

		cy.contains("Return to all recipes");
	});

	it("add recipe to favorites list", () => {
		// add test recipe to favoritess
		cy.get("[data-test-add-to-fav-button-id=" + testRecipe.id + "]").click();

		cy.get("[data-test-add-to-fav-button-id=" + testRecipe.id + "]").should("be.disabled");

		// test for toast message
		cy.contains("Recipe added to favorites");

		// test for favorites count
		cy.contains('[data-test-id="fav-count"]', 1);
	});

	it("add ingredient to shopping list", () => {
		cy.get('[data-test-add-to-shopping-list-button-id="heavy cream"]').click({ force: true });
		cy.get('[data-test-add-to-shopping-list-button-id="heavy cream"]').should("be.disabled");

		// test for toast message
		cy.contains("heavy cream added to shopping list");

		// test for shopping list count
		cy.contains('[data-test-id="fav-count"]', 1);
	});

	it("return to all recipes link", () => {
		cy.get('[data-test-id="return-to-all-recipes"]').click();
		cy.url().should("eq", Cypress.config().baseUrl + "/");
	});
});
