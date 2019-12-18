describe("add-new-recipe-page", () => {
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
	});

	it("can add required fields for recipe", () => {
		cy.contains("Add a recipe");

		cy.get('[data-test-id="recipe-id"')
			.clear()
			.type("1{backspace}");
		cy.contains("Recipe ID is required.");

		cy.get('[data-test-id="recipe-id"')
			.clear()
			.type("123");
		cy.contains("Recipe ID must be at least 4 characters long.");

		cy.get('[data-test-id="recipe-name"')
			.clear()
			.type("1{backspace}");
		cy.contains("Recipe name is required.");

		cy.get('[data-test-id="recipe-description"')
			.clear()
			.type("1{backspace}");
		cy.contains("Recipe name is required.");
	});

	it("can add ingredients", () => {
		cy.get('[data-test-id="edit-ingredients-button"]').click();
		//add first ingredient
		cy.get('[data-test-id="ingredient-name-column"]')
			.eq(0)
			.type(testRecipe.ingredients[0].name);
		cy.get('[data-test-id="ingredient-amount-column"]')
			.eq(0)
			.type(testRecipe.ingredients[0].amount);
		cy.get('[data-test-id="ingredient-unit-column"]')
			.eq(0)
			.type(testRecipe.ingredients[0].unit);

		//add second ingredient
		cy.get('[data-test-id="add-new-ingredient-button"]')
			.eq(0)
			.click();
		cy.get('[data-test-id="ingredient-name-column"]')
			.eq(1)
			.type(testRecipe.ingredients[1].name);
		cy.get('[data-test-id="ingredient-amount-column"]')
			.eq(1)
			.type(testRecipe.ingredients[1].amount);
		cy.get('[data-test-id="ingredient-unit-column"]')
			.eq(1)
			.type(testRecipe.ingredients[1].unit);

		cy.get('[data-test-id="save-ingredients-button"]').click();
	});

	it("can add steps", () => {
		cy.get('[data-test-id="edit-steps-button"]').click();
		//add first step
		cy.get('[data-test-id="step-description-column"]')
			.eq(0)
			.type(testRecipe.steps[0].description);
		//add second step
		cy.get('[data-test-id="add-new-step-button"]')
			.eq(0)
			.click();
		cy.get('[data-test-id="step-description-column"]')
			.eq(1)
			.type(testRecipe.steps[1].description);
		cy.get('[data-test-id="save-steps-button"]').click();
	});

	it("can save new recipe", () => {
		//save button is initially disabled
		cy.get('[data-test-id="save-new-recipe-button"]').should("be.disabled");

		cy.get('[data-test-id="recipe-id"').type(testRecipe.id);
		cy.get('[data-test-id="recipe-name"').type(testRecipe.name);
		cy.get('[data-test-id="recipe-description"').type(testRecipe.description);

		// save button should be enabled after typing something
		cy.get('[data-test-id="save-new-recipe-button"]').should("not.be.disabled");
		cy.get('[data-test-id="save-new-recipe-button"]').click();

		cy.url().should("include", testRecipe.id);
	});
});
