<template>
	<div>
		<div v-if="mode == 'main'">
			<h2>Recipes</h2>

			<b-container class="recipe">
				<b-row v-for="recipe in recipes" :key="recipe.id">
					<b-col>
						<router-link :to="{ name: 'recipe', params: { id: recipe.id } }">
							<b-card
								:data-test-recipe-id="recipe.id"
								v-if="recipe.id"
								class="recipe-thumb rounded"
								:img-alt="'Recipe image of ' + recipe.name"
								:img-src="recipe.image | recipeImage"
								img-left
								img-height="230px"
								img-width="250px"
								:title="recipe.name"
								align="center"
							>
								<b-card-text>
									{{ recipe.description }}
								</b-card-text>
							</b-card>
						</router-link>
					</b-col>
				</b-row>
			</b-container>
		</div>
		<div v-else-if="mode == 'remove'">
			<b-container class="recipe">
				<b-row v-for="(recipe, index) in recipes" :key="recipe.id">
					<b-col>
						<!-- <router-link :to="{ name: 'recipe', params: { id: recipe.id } }"> -->
						<b-card
							:data-test-recipe-id="recipe.id"
							v-if="recipe.id"
							class="recipe-thumb rounded"
							:img-alt="'Recipe image of ' + recipe.name"
							:img-src="recipe.image | recipeImage"
							img-left
							img-height="230px"
							img-width="250px"
							:title="recipe.name"
							align="center"
						>
							<b-card-text>
								{{ recipe.description }}
							</b-card-text>

							<b-button
								:data-test-remove-recipe-button-id="recipe.id"
								size="sm"
								variant="outline-primary"
								@click="removeRecipe(recipe, index)"
							>
								Remove
							</b-button>
						</b-card>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>
</template>

<script>
	import * as app from "./../app.js";

	export default {
		name: "ShowRecipes",
		props: ["mode"],
		data: function() {
			return {
				favorites: new app.Favorites()
			};
		},
		computed: {
			recipes: function() {
				return this.$store.state.recipes;
			}
		},
		methods: {
			removeRecipe: function(recipe, index) {
				recipe.index = index;
				this.$store.dispatch("removeRecipe", recipe);

				// Use a shorter name for this.$createElement
				const h = this.$createElement;
				// Create the message
				const vNodesMsg = h("p", { class: ["text-left", "mb-0"] }, [
					h("strong", {}, "Recipe"),
					` removed from store`
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
	};
</script>

<style scoped>
	.row {
		margin-bottom: 10px;
	}
</style>
