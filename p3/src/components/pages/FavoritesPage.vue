<template>
    <div>
        <p>
            Here are all the favorites that you've saved so far.
        </p>

        <show-favorites></show-favorites>
    </div>
</template>

<script>
import ShowFavorites from './../ShowFavorites.vue';

export default {
	name: 'FavoritesPage',
	components: { ShowFavorites },
	data: function () {
		return {
		};
	}
};
</script>
