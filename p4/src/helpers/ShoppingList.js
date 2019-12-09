export default class ShoppingList {

    /**
     * Default constructor
     */
    constructor() {
        // Extract JSON  string from local storage
        let shoppingListItems = localStorage.getItem('shoppingList');

        // Parse JSON  String to `items` object
        this.shoppingList = (shoppingListItems) ? JSON.parse(shoppingListItems) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.shoppingList;
    }

    /**
     * Returns how many total items are in the shopping list
     */
    count() {
        return this.shoppingList.length;
    }

    /**
     * Updates items in localstorage
     */
    update() {
        localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList))
    }

    /**
     * Add a new item of the given ingredientId for a given recipeId
     */
    add(ingredientId, recipeId, quantity, recipeName) {

        // First see if item is already present
        let ingredient = this.getItem(recipeId, ingredientId)

        if (!quantity)
            quantity = "none";

        if (!ingredient) {
            // Ingredient for recipe is not in shopping list, add as new item
            this.shoppingList.push({
                recipeId: recipeId,
                ingredientId: ingredientId,
                recipeName: recipeName,
                quantity: quantity
            });
            this.update();
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Remove an item from items via ingredientId
     */
    remove(recipeId, ingredientId) {
        let ingredient = this.getItem(recipeId, ingredientId);

        let ingredientIndex = this.shoppingList.indexOf(ingredient);

        if (ingredient) {
            this.shoppingList.splice(ingredientIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via ingredientId for a given recipeId
     * Returns null if ingredient does not exist in items
     */
    getItem(recipeIdParam, ingredientIdParam) {
        let item = this.shoppingList.find(({ recipeId, ingredientId }) => recipeId === recipeIdParam
            && ingredientId === ingredientIdParam) || null;

        return item;
    }
}

