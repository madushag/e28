import Vue from "vue";

Vue.filter("recipeImage", function(imageUrl) {
	if (imageUrl == "placeholder") {
		return "./assets/images/placeholder.png";
	} else {
		return imageUrl;
	}
});
