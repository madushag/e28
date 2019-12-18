import Vue from "vue";

Vue.filter("recipeImage", function(imageUrl) {
	if (imageUrl == "placeholder") {
		return require("./assets/images/placeholder.png");
	} else {
		return imageUrl;
	}
});
