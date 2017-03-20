/*
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import auth from './auth';
import {reducer as form} from 'redux-form';
import info from './info';

export default combineReducers({routing: routerReducer, auth, form, info});
*/

import { combineReducers } from 'redux'
import basket, * as fromBasket from './basket'
//import products, * as fromProducts from '../models/shopAPI'

const getProducts = state => fromBasket.Products(state.basket)
//const getProduct = (state, name) => fromProducts.getProduct(state.products, name)

export default combineReducers({
  basket

})
