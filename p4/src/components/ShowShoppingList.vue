<template>
	<div id="shoppingList">
		<h2>Shopping List</h2>
		<ul class="shopping-list">
			<li v-for="ingredient in shoppingList" :key="ingredient.ingredientId">
				<a target="_new" :href="ingredient.ingredientId | amazonify">
					<div>
						<label class="text-left"
							>{{ ingredient.ingredientId }} - {{ ingredient.quantity }} |
							{{ ingredient.recipeName }}</label
						>
						<button class="destroy" @click="removeItem(ingredient)"></button>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import * as app from "./../app.js";

	export default {
		name: "ShowShoppingList",
		components: {},
		data: function() {
			return {
				shoppingList: null
			};
		},
		mounted() {
			let shoppingList = new app.ShoppingList();
			this.shoppingList = shoppingList.getItems();
		},
		methods: {
			removeItem: function(ingredient) {
				let shoppingList = new app.ShoppingList();
				shoppingList.remove(ingredient.recipeId, ingredient.ingredientId);
				this.shoppingList = shoppingList.getItems();

				this.$store.commit("setShoppingListCount", shoppingList.count());
			}
		},
		filters: {
			amazonify: function(value) {
				return "https://www.amazon.com/s?k=" + value.split(" ").join("+");
			}
		}
	};
</script>

<style scoped></style>
