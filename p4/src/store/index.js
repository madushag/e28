import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favoriteCount: 0,
        shoppingListCount: 0
    },
    mutations: {
        setShoppingListCount(state, payload) {
            state.shoppingListCount = payload;
        },

        setFavoriteCount(state, payload) {
            state.favoriteCount = payload;
        }
        // updateCartCount(state, payload) {
        //     state.cartCount += payload;
        // },
        // setProducts(state, payload) {
        //     state.products = payload;
        // },
        // addProduct(state, payload) {
        //     _.merge(state.products, payload)
        // }
    }
})