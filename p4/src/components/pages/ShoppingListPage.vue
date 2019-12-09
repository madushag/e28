<template>
    <div>
        <p>
            Here are all the items in your shopping list.
        </p>

        <show-shopping-list></show-shopping-list>
    </div>
</template>

<script>
import ShowShoppingList from './../ShowShoppingList.vue';

export default {
	name: 'ShoppingListPage',
	components: { ShowShoppingList },
	data: function () {
		return {
		};
	}
};
</script>
