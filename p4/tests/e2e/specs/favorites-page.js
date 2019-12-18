describe("favorites-page", () => {
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
		name: "Grand Marnier & Coffee Ice Cream"
	};

	//before we test the favorites list, lets add a recipe as a favorite
	it("add a recipe to the favorite list", () => {
		cy.visit("/");

		// goto recipe details
		cy.get("[data-test-recipe-id=" + testRecipe.id + "]").click();
		cy.url().should("include", testRecipe.id);

		// add test recipe to favoritess
		cy.get("[data-test-add-to-fav-button-id=" + testRecipe.id + "]").click();

		// test for toast message
		cy.contains("Recipe added to favorites");

		// test for favorites count
		cy.contains('[data-test-id="fav-count"]', 1);
	});

	it("shows recipe that was added to favorites list", () => {
		// Visit the favorites page
		cy.visit("/favorites");
		cy.contains("Here are all the favorites that you've saved so far.");
		cy.contains("Favorites");
		cy.contains(testRecipe.name);

		// there should only be 1 favorite listed
		cy.get('[data-test="fav-item"]')
			.its("length")
			.should("be.eq", 1);
	});

	it("clicking on favorite recipe item shows recipe details", () => {
		cy.get("[data-test='fav-item'").click();
		cy.url().should("include", testRecipe.id);
		cy.contains(testRecipe.name);
	});

	it("remove testRecipe from favorite list", () => {
		// Visit the favorites page
		cy.visit("/favorites");

		// check if recipe exists in list
		cy.contains(testRecipe.name);

		// show hidden button and remove recipe from list
		cy.get("[data-test-id=" + testRecipe.id + "]")
			.invoke("show")
			.click();

		// test for favorites count
		cy.contains('[data-test-id="fav-count"]', 0);

		// check if recipe exists after removing
		cy.contains(testRecipe.name).should("not.exist");
	});
});
