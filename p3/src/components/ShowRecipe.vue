<template>
<b-col>
    <div class='recipe'>
		<div v-if="mode === 'main'">
			<router-link :to='{ name: "recipe", params: {"id" : recipe.id }}'>
				<b-card
					v-if='recipe.id'
					:img-alt='"Recipe image of " + recipe.name'
					:img-src='recipe.image'
					img-top
					style="max-width: 20rem;"					
					:title="recipe.name">
					<b-card-text>
						<p>{{ recipe.description }}</p>							
					</b-card-text>										
				</b-card>
			</router-link>
			<br />
			<b-button v-if="!existsInFavorites(recipe)" 
						size="sm" 
						variant="outline-primary"
						@click='addToFavorites(recipe)'>
						Add to favorites
			</b-button>	
		</div>		
		<div v-else>
			<b-card
				v-if='recipe.id'
				class='recipe-thumb rounded'
				:img-alt='"Recipe image of " + recipe.name'
				:img-src='recipe.image'
				img-right
				:title="recipe.name">
				<b-card-text>
					<p>{{ recipe.description }}</p>							
				</b-card-text>	

				<b-button v-if="!existsInFavorites(recipe)" 
						size="sm" 
						variant="outline-primary"
						@click='addToFavorites(recipe)'>
						Add to favorites
				</b-button>					
			</b-card>
		</div>
        
		<br />
		
    </div>
</b-col>
</template>

<script>
import * as app from './../app.js';

export default {
	name: 'ShowRecipe',
	props: ['recipe', 'mode'],
	data: function () {
		return {
			favorites: new app.Favorites()
		};
	},

	methods: {
		existsInFavorites: function (recipe) {

			if (this.favorites.getItem(recipe.id)) {
				return true;
			}
			else {
				return false;
			}
		},

		addToFavorites: function (recipeId) {

			let favorites = new app.Favorites();

			// Use a shorter name for this.$createElement
			const h = this.$createElement;
			// Create the message
			const vNodesMsg = h(
				'p',
				{ class: ['text-left', 'mb-0'] },
				[
					h('strong', {}, 'Recipe'),
					` added to favorites`,
				]
			);

			if (favorites.add(recipeId)) {

				this.$bvToast.toast([vNodesMsg], {
					autoHideDelay: 4000,
					variant: "success",
					appendToast: true,
					solid: true,
					noCloseButton: true
				});

				app.sharedState.favoriteCount = favorites.count();
				this.favorites = favorites;
			}
		}


	}
};
</script>

<style scoped>
</style>