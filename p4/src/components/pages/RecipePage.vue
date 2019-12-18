<template>
	<div id="recipe-page" v-if="recipe">
		<b-card
			:data-test-recipe-id="recipe.id"
			v-if="recipe.id"
			class="recipe-thumb rounded"
			:img-alt="'Recipe image of ' + recipe.name"
			:img-src="recipe.image | recipeImage"
			img-left
			img-height="190px"
			img-width="250px"
			:title="recipe.name"
			align="center"
		>
			<b-card-text>
				{{ recipe.description }}
			</b-card-text>

			<b-button
				:data-test-add-to-fav-button-id="recipe.id"
				:disabled="favorites.existsInFavorites(recipe)"
				size="sm"
				variant="primary"
				@click="addToFavorites(recipe)"
			>
				Add to favorites
			</b-button>
		</b-card>
		<br />

		<h4 style="text-align:left">Ingredients</h4>
		<br />

		<ul class="cleanList">
			<b-container>
				<li
					data-test-id="ingredient"
					:data-test-ingredient-name="ingredient.name"
					v-for="ingredient in recipe.ingredients"
					:key="ingredient.name"
				>
					<b-row>
						<b-col cols="4"
							><p class="text-left capitalize">
								{{ ingredient.name }}
							</p></b-col
						>
						<b-col cols="4">{{ ingredient.amount }} {{ ingredient.unit }}</b-col>
						<b-col cols="4">
							<b-button
								:data-test-add-to-shopping-list-button-id="ingredient.name"
								:disabled="existsInShoppingList(ingredient.name, recipe.id)"
								size="sm"
								variant="info"
								@click="
									addToShoppingList(
										ingredient.name,
										recipe.id,
										ingredient.amount,
										ingredient.unit,
										recipe.name
									)
								"
							>
								Add to shopping list
							</b-button>
						</b-col>
					</b-row>
				</li>
			</b-container>
		</ul>

		<h4 style="text-align:left">Steps</h4>
		<br />

		<ul class="numberedList">
			<b-container>
				<li data-test-id="steps" v-for="(step, index) in recipe.steps" :key="index">
					<b-row>
						<b-col cols="12"
							><p class="text-left">
								{{ step.description }}
							</p></b-col
						>
					</b-row>
				</li>
			</b-container>
		</ul>

		<router-link data-test-id="return-to-all-recipes" :to="'/'"
			>&larr; Return to all recipes</router-link
		>
	</div>
</template>

<script>
	import * as app from "./../../app.js";

	export default {
		name: "RecipePage",
		props: ["id"],
		data: function() {
			return {
				shoppingList: new app.ShoppingList(),
				favorites: new app.Favorites()
			};
		},
		methods: {
			existsInShoppingList: function(ingredientName, recipeId) {
				if (this.shoppingList.getItem(recipeId, ingredientName)) {
					return true;
				} else {
					return false;
				}
			},

			addToShoppingList: function(ingredientName, recipeId, amount, units, recipeName) {
				let quantity = "";
				if (typeof units == "undefined") quantity = amount;
				else quantity = amount + " " + units;

				if (this.shoppingList.add(ingredientName, recipeId, quantity, recipeName)) {
					// Use a shorter name for this.$createElement
					const h = this.$createElement;
					// Create the message
					const addedToShopListMsg = h("p", { class: ["text-left", "mb-0"] }, [
						h("strong", {}, ingredientName),
						` added to shopping list`
					]);
					this.$bvToast.toast([addedToShopListMsg], {
						autoHideDelay: 4000,
						variant: "success",
						appendToast: true,
						solid: true,
						noCloseButton: true
					});
				}

				this.$store.commit("setShoppingListCount", this.shoppingList.count());
			},
			addToFavorites: function() {
				var wasAdded = this.favorites.addToFavorites(this.recipe);

				if (wasAdded) {
					// Use a shorter name for this.$createElement
					const h = this.$createElement;
					// Create the message
					const vNodesMsg = h("p", { class: ["text-left", "mb-0"] }, [
						h("strong", {}, "Recipe"),
						` added to favorites`
					]);

					this.$bvToast.toast([vNodesMsg], {
						autoHideDelay: 4000,
						variant: "success",
						appendToast: true,
						solid: true,
						noCloseButton: true
					});
				}
			}
		},
		computed: {
			recipe: function() {
				return this.$store.getters.getRecipeById(this.id);
			}
		}
	};
</script>

<style scoped></style>
