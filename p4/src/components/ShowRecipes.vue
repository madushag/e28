<template>
	<b-container>
		<h2>Recipes</h2>
		<b-row align-v="center">
			<!-- <b-card-group> -->
			<b-col>
				<show-recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" :mode="'aa'">
				</show-recipe>
			</b-col>
			<!-- </b-card-group> -->
		</b-row>
	</b-container>
</template>

<script>
	import ShowRecipe from "./ShowRecipe.vue";

	export default {
		name: "ShowRecipes",
		components: { ShowRecipe },
		data: function() {
			return {};
		},
		computed: {
			recipes: function() {
				return this.$store.state.recipes;
			}
		}
	};
</script>

<style scoped></style>
