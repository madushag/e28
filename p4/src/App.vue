<template>
    <div id='app'>
         <router-link exact :to='{ name: "home" }'>
            <img id='logo' alt='RecipeBook logo' src='./assets/images/recipebook-logo.png' />
         </router-link>
        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link exact :to='{ name: link }'>
                        {{ link }}
                        <span data-test-id="fav-count" v-if='link == "favorites"'>({{ favoriteCount }})</span>
                        <span v-if='link == "shopping list"'>({{ shoppingListCount }})</span>
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
			links: ['home', 'favorites', 'shopping list']
		};
	},
	mounted() {
		this.shoppingList = new app.ShoppingList();
		this.favorites = new app.Favorites();

		this.$store.commit('setShoppingListCount', this.shoppingList.count());
		this.$store.commit('setFavoriteCount', this.favorites.count());
	},
	computed: {
		favoriteCount: function () {
			return this.$store.state.favoriteCount;
		},
		shoppingListCount: function () {
			return this.$store.state.shoppingListCount;
		}
	}
};
</script>

<style lang='scss'>
@import "./assets/css/recipebook.scss";
</style>
