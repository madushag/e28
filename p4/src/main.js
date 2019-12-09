import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './store';

import HomePage from './components/pages/HomePage.vue';
import RecipePage from './components/pages/RecipePage.vue';
import FavoritesPage from './components/pages/FavoritesPage.vue';
import ShoppingListPage from './components/pages/ShoppingListPage.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

/*----------------------------------------------------
ROUTING
-----------------------------------------------------*/
const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/favorites', component: FavoritesPage, name: 'favorites' },
    { path: '/shopping-list', component: ShoppingListPage, name: 'shopping list' },
    { path: '/recipes/:id', component: RecipePage, name: 'recipe', props: true }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});


/*----------------------------------------------------
ROOT VUE INSTANCE
-----------------------------------------------------*/
new Vue({
    router: router,
    store: store,
    render: h => h(App),
}).$mount('#app')
