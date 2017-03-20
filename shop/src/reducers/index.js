import { combineReducers } from 'redux'
import basket, * as fromBaskets  from './basket'
import products, * as fromProducts  from './products'

export default combineReducers({
  products,
  basket

})

//helpers
export const getAllProducts = state => fromProducts.getAllProducts();
export const addProduct = fromBaskets.addProduct;
export const removeProduct = fromBaskets.removeProduct;
export const decrementProduct = fromBaskets.decrementProduct;

// Discount API Private Generic function to calculate volume discounts, for
// eaxmple 3 for price of 2; or 5 for price of 3
function volumeDiscount(quantity, volumeBuying, volumePaying) {
    //calcualte the modulus and then th divisior
    return Math.floor(quantity / volumeBuying) * volumePaying + (quantity % volumeBuying);
}

export function discountedTotal(quantity, product) {
    let total;
    //calculate basket line item price after volume discount
    if (!!product.discount && !!product.discount.volume) {
      //price multiplied by volume discount quantity
      total = product.price * volumeDiscount(quantity, product.discount.volume.buy, product.discount.volume.pay);

    } else {
      total = product.price * quantity;
    }

    //parse float so we have two decimal places (currency)
    return parseFloat(total).toFixedNumber(2);
  }


//In basket need to lookup Product details
export const productLookup = (state, name) => state.products.find( x => x.name === name);

// fix for low level JS: toFixed returns a string.  We need a number so we can
// add the currency totals
// eslint-disable-next-line
Number.prototype.toFixedNumber = function (x, base = 10) {
  var pow = Math.pow(base, x);
  return + (Math.round(this * pow) / pow);
}