import Vue from "vue";
import Vuex from "vuex";

import * as app from "./../app.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		favoriteCount: 0,
		shoppingListCount: 0,
		recipes: null
	},
	mutations: {
		setShoppingListCount(state, payload) {
			state.shoppingListCount = payload;
		},
		setFavoriteCount(state, payload) {
			state.favoriteCount = payload;
		},
		setRecipes(state, payload) {
			state.recipes = payload;
		},
		addRecipe(state, payload) {
			_.merge(state.recipes, payload);
		},
		removeRecipeById(state, payload) {
			state.recipes = _.omit(state.recipes, [payload.index]);
		}
	},
	actions: {
		setRecipes(context) {
			app.axios.get(app.config.api + "/recipes.json").then(response => {
				context.commit("setRecipes", response.data);
			});
		},
		removeRecipe(context, recipe) {
			app.axios
				.delete(app.config.api + "/recipes/" + recipe.index + ".json")
				.then(context.commit("removeRecipeById", recipe));
		}
	},
	getters: {
		getRecipeById(state) {
			return function(id) {
				return _.find(state.recipes, { id: id });
			};
		}
	}
});
