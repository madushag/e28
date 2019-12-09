<template>
    <div>
        <p>
            The RecipeBook is your one-stop-shop for convenient online grocery shopping in the greater Boston area.
        </p>

        <show-recipes></show-recipes>
    </div>
</template>

<script>
import ShowRecipes from './../ShowRecipes.vue';

export default {
	name: 'ShowHome',
	components: { ShowRecipes },
	data: function () {
		return {
		};
	}
};
</script>
