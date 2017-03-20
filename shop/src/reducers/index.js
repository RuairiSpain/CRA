import { combineReducers } from 'redux'
import basket, * as fromBaskets  from './basket'
import products, * as fromProducts  from './products'

export default combineReducers({
  basket,
  products
})

//helpers
export const getAllProducts = state => fromProducts.getAllProducts();
export const addProduct = fromBaskets.addProduct;

export const removeProduct = (state, name) =>  fromBaskets.removeProduct(name);


