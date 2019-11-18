<template>
    <div id='recipe-page' v-if='recipe'>        
		<show-recipe :recipe='recipe'></show-recipe>
		
		<br />

        <ul class='cleanList'>
			<b-container>				
				<li v-for='ingredient in recipe.ingredients' :key='ingredient.name'>
					<b-row>
						<b-col cols="4"><p class="text-left capitalize">{{ ingredient.name }}</p></b-col>						
						<b-col cols="4">{{ ingredient.amount }} {{ ingredient.unit}}</b-col>						
						<b-col cols="4">
							<b-button v-if='!existsInShoppingList(ingredient.name, recipe.id)'
								size="sm" variant="info" 
								@click='addToShoppingList(ingredient.name, recipe.id, ingredient.amount, ingredient.unit, recipe.name)'>
								Add to shopping list
							</b-button>
						</b-col>
					</b-row>
				</li>				
			</b-container>
        </ul>      

        <router-link :to='"/"'>&larr; Return to all recipes</router-link>
    </div>
</template>

<script>
import * as app from './../../app.js';
import ShowRecipe from './../ShowRecipe.vue';

export default {
	name: 'RecipePage',
	components: { ShowRecipe },
	props: ['id'],
	data: function () {
		return {
			recipe: null,
			shoppingList: new app.ShoppingList()
		};
	},
	mounted() {
		app.axios
			.get(app.config.api + '/recipes/' + this.id)
			.then(response => {
				this.recipe = response.data;
			});
	},
	methods: {
		existsInShoppingList: function (ingredientName, recipeId) {
			if (this.shoppingList.getItem(recipeId, ingredientName)) {
				return true;
			}
			else {
				return false;
			}
		},

		addToShoppingList: function (ingredientName, recipeId, amount, units, recipeName) {
			// Use a shorter name for this.$createElement
			const h = this.$createElement;
			// Create the message
			const addedToShopListMsg = h(
				'p',
				{ class: ['text-left', 'mb-0'] },
				[
					h('strong', {}, ingredientName),
					` added to shopping list`,
				]
			);

			let quantity = "";
			if (typeof (units) == "undefined")
				quantity = amount;
			else
				quantity = amount + " " + units;

			if (this.shoppingList.add(ingredientName, recipeId, quantity, recipeName)) {
				this.$bvToast.toast([addedToShopListMsg], {
					autoHideDelay: 4000,
					variant: "success",
					appendToast: true,
					solid: true,
					noCloseButton: true
				});
			}

			app.sharedState.shoppingListCount = this.shoppingList.count();
		}
	}
}
</script>

<style scoped>
</style>