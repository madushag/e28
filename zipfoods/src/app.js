export { default as Cart } from './Cart';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/madushag/e28-zipfoods-api/',
}

export let store = {
    cartCount: 0
}