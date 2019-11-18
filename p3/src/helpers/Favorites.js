export default class Favorites {

    /**
     * Default constructor
     */
    constructor() {
        // Extract JSON favorites string from local storage
        let favorites = localStorage.getItem('favorites');

        // Parse JSON favorites String to `items` object
        this.recipes = (favorites) ? JSON.parse(favorites) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.recipes;
    }

    /**
     * Returns how many total items are in the favorites list
     */
    count() {
        return this.recipes.length;
    }

    /**
     * Updates favorites in localstorage
     */
    update() {
        localStorage.setItem('favorites', JSON.stringify(this.recipes))

    }

    /**
     * Add a new item of the given recipeId
     */
    add(recipeParam) {

        // First see if recipe is already present
        let recipe = this.getItem(recipeParam.id)

        if (!recipe) {

            // Recipe not in favorites, add as new item
            this.recipes.push({
                id: recipeParam.id,
                name: recipeParam.name
            });

            this.update();
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Remove an item from items via recipeId
     */
    remove(recipeId) {
        let recipe = this.getItem(recipeId);
        let recipeIndex = this.recipes.indexOf(recipe);

        if (recipe) {
            this.recipes.splice(recipeIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via recipeId
     * Returns null if recipe does not exist in items
     */
    getItem(recipeIdParam) {
        return this.recipes.find(({ id }) => id === recipeIdParam) || null;
    }
}