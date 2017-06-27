import shop from '../model/shopAPI'

//constants
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

//reducer
const products = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}

//action creators and helpers
export const receiveProducts = products => ({type: RECEIVE_PRODUCTS, products})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const getProduct = (name) => (dispatch, getState) => {
  const {products} = getState()
  return products.find(item => item.name === name);

}

function fetchItemThreads (state) {
	let type = state.router.location.pathname.replace('/',''); // remove the first slash
	let page = parseInt(state.router.location.query.p) || 1;
	return dispatch => {
		dispatch(requestItemThreads());
		return type === 'newcomments' ?
		 	updatesRef().once('value', function(snapshot) {
				getCommentItems(snapshot.val(), (items, keepUpdate) => {
					dispatch(keepUpdate ? keepWaiting(items) : receiveItemThreads(items));
				});
		  	}) :
			storiesRef(getApiUrlByItemType(type)).once('value', function(snapshot) {
				let skim = snapshot.val().slice((page - 1) * MAX_THREAD_NUMBER, MAX_THREAD_NUMBER * page); // reduce the page size
				getItems(skim, items => dispatch(receiveItemThreads(items)));
			});
	};
}

export default products;