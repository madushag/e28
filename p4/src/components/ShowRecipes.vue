<template>
    <div id='recipes'>
        <h2>Recipes</h2> 
		<b-container>
			<b-row>
				<!-- <b-card-group> -->
					<show-recipe v-for='recipe in recipes' :key='recipe.id' 
						:recipe='recipe' :mode="'main'">
					</show-recipe>
				<!-- </b-card-group> -->
			</b-row>
		</b-container>
    </div>
</template>


<script>
import ShowRecipe from './ShowRecipe.vue';
import * as app from './../app.js';

export default {
	name: 'ShowRecipes',
	components: { ShowRecipe },
	data: function () {
		return {
			recipes: null		};
	},
	mounted() {
		app.axios
			.get(app.config.api + '/recipes.json')
			.then(response => {
				this.recipes = response.data;
			});
	},
	methods: {

	}
};
</script>

<style scoped>
</style>