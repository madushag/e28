export { default as Favorites } from './helpers/Favorites';
export { default as ShoppingList } from './helpers/ShoppingList';

export const axios = require('axios');

export const config = {
    api: 'https://e28-p4-8107e.firebaseio.com',
}

// export let sharedState = {
//     favoriteCount: 0,
//     shoppingListCount: 0
// }