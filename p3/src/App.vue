<template>
    <div id='app'>
        <img id='logo' alt='RecipeBook logo' src='./assets/images/recipebook-logo.png' />

        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link exact :to='{ name: link }'>
                        {{ link }}
                        <span v-if='link == "favorites"'>({{ sharedState.favoriteCount }})</span>
                        <span v-if='link == "shopping list"'>({{ sharedState.shoppingListCount }})</span>
                    </router-link>
                </li>
            </ul>
        </nav>

    
        <router-view></router-view>
    
    </div>
</template>

<script>
import * as app from './app.js';

export default {
	name: 'app',
	data: function () {
		return {
			links: ['home', 'favorites', 'shopping list'],
			sharedState: app.sharedState
		};
	},
	mounted() {
		this.shoppingList = new app.ShoppingList();
		this.favorites = new app.Favorites();
		app.sharedState.shoppingListCount = this.shoppingList.count();
		app.sharedState.favoriteCount = this.favorites.count();
	}
};
</script>

<style lang='scss'>
@import "./assets/css/recipebook.scss";
</style>
