import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";

import App from "./App.vue";
import store from "./store";
import "./filters.js";

import HomePage from "./components/pages/HomePage.vue";
import RecipePage from "./components/pages/RecipePage.vue";
import FavoritesPage from "./components/pages/FavoritesPage.vue";
import ShoppingListPage from "./components/pages/ShoppingListPage.vue";
import AddNewRecipePage from "./components/pages/AddNewRecipePage.vue";
import RemoveRecipePage from "./components/pages/RemoveRecipePage.vue";
import NotFoundPage from "./components/pages/NotFoundPage.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* eslint-disable no-unused-vars */
const _ = require("lodash");
/* eslint-enable no-unused-vars */

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

/*----------------------------------------------------
ROUTING
-----------------------------------------------------*/
const routes = [
	{ path: "/", component: HomePage, name: "home" },
	{ path: "/favorites", component: FavoritesPage, name: "favorites" },
	{ path: "/shopping-list", component: ShoppingListPage, name: "shopping list" },
	{ path: "/recipes/create", component: AddNewRecipePage, name: "add recipe" },
	{ path: "/recipes/remove", component: RemoveRecipePage, name: "remove recipe" },
	{ path: "/recipes/:id", component: RecipePage, name: "recipe", props: true },
	{ path: "*", component: NotFoundPage }
];

const router = new VueRouter({
	routes: routes,
	mode: "history"
});

/*----------------------------------------------------
ROOT VUE INSTANCE
-----------------------------------------------------*/
new Vue({
	router: router,
	store: store,
	render: h => h(App)
}).$mount("#app");
