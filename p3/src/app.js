export { default as Favorites } from './helpers/Favorites';
export { default as ShoppingList } from './helpers/ShoppingList';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/madushag/e28-p3/',
}

export let sharedState = {
    favoriteCount: 0,
    shoppingListCount: 0
}