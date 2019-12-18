<template>
	<div id="recipe-create">
		<h1>Remove a recipe</h1>
		<show-recipes :mode="'remove'"></show-recipes>
	</div>
</template>

<script>
	// import * as app from "./../../app.js";
	import ShowRecipes from "./../ShowRecipes.vue";

	export default {
		name: "RemoveRecipePage",
		components: { ShowRecipes },
		data: function() {
			return {
				recipe: {}
			};
		}
	};
</script>

<style scoped></style>
