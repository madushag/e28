<template>
	<div id="favorites">
		<h2>Favorites</h2>
		<ul class="favorites-list">
			<li data-test="fav-item" v-for="recipe in favoriteRecipes" :key="recipe.id">
				<div>
					<router-link :to="{ name: 'recipe', params: { id: recipe.id } }">
						<label class="text-left">{{ recipe.name }}</label>
					</router-link>
					<button
						:data-test-id="recipe.id"
						class="destroy"
						@click="removeFavorite(recipe.id)"
					></button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import * as app from "./../app.js";

	export default {
		name: "ShowFavorites",
		components: {},
		data: function() {
			return {
				favoriteRecipes: null
			};
		},
		mounted() {
			let favorites = new app.Favorites();
			this.favoriteRecipes = favorites.getItems();
		},
		methods: {
			removeFavorite: function(recipeId) {
				let favorites = new app.Favorites();
				favorites.remove(recipeId);
				this.favoriteRecipes = favorites.getItems();

				this.$store.commit("setFavoriteCount", favorites.count());
			}
		}
	};
</script>

<style scoped></style>
