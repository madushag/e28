describe("remove-recipe-page", () => {
	let rnd = Math.floor(Math.random() * 100);

	let testRecipe = {
		id: "test-recipe" + "-" + rnd,
		name: "Test Recipe",
		description: "This is a test recipe.",
		ingredients: [
			{
				name: "test ingredient",
				amount: "10",
				unit: "tsp"
			},
			{
				name: "test ingredient 2",
				amount: "20",
				unit: "cups"
			}
		],
		steps: [
			{
				description: "test step 1"
			},
			{
				description: "test step 2"
			}
		]
	};

	beforeEach(function() {
		cy.visit("/recipes/create");

		cy.get('[data-test-id="recipe-id"').type(testRecipe.id);
		cy.get('[data-test-id="recipe-name"').type(testRecipe.name);
		cy.get('[data-test-id="recipe-description"').type(testRecipe.description);

		cy.get('[data-test-id="save-new-recipe-button"]').click();
	});

	it("can remove a recipe", () => {
		cy.visit("/recipes/remove");
		cy.contains("Remove a recipe");
		cy.get("[data-test-remove-recipe-button-id='" + testRecipe.id + "']").should("have.length", 1);

		cy.get("[data-test-remove-recipe-button-id='" + testRecipe.id + "']").click();
		cy.contains("Recipe removed from store");

		cy.get("[data-test-remove-recipe-button-id='" + testRecipe.id + "']").should("have.length", 0);
	});
});
