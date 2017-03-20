// Actions
const ADD_ITEM     = 'basket/add';
const UPDATE_ITEM  = 'basket/update';
const REMOVE_ITEM  = 'basket/remove';
const CLEAR_ITEMS  = 'basket/clear';

const initialState = [];

// Reducer
const basketItem = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({},{
        name: action.name,
        quantity: action.quantity
      });
    default:
      return state;
  }
}

const basketItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, basketItem(undefined, action)];
    case UPDATE_ITEM:
        const updatedItems = state.map(item => {
        if(item.name === action.name){
          return { ...item, quantity: item.quantity + action.quantity }
        }
        return item
      })
      return updatedItems
    case REMOVE_ITEM:
      return state.filter(item => item.name !== action.name);
    case CLEAR_ITEMS:
      return initialState;
    default:
      return state;
  }
}

// Action Creators
export const addProduct = (name, quantity = 1) => (dispatch, getState) => {
  const {basket} = getState()
  const existingItem = basket.find(item => item.name === name);
  if(!!existingItem){
    dispatch({type: UPDATE_ITEM, name, quantity});
  }
  else{
     dispatch({type: ADD_ITEM, name, quantity});
  }
}

export const updateProduct = (name, quantity = 1) => (dispatch) => {
  if(quantity <= 0){
      dispatch({type: REMOVE_ITEM, name});
  }
  else{
    dispatch({type: UPDATE_ITEM, name, quantity});
  }
}

export const decrementProduct = (name) => (dispatch, getState) => {
  const {basket} = getState()
  const existingItem = basket.find(item => item.name === name);
    if(!!existingItem && existingItem.quantity <= 1){
      dispatch({type: REMOVE_ITEM, name});
  }
  else if(!!existingItem){
    dispatch({type: UPDATE_ITEM, name, quantity: - 1});
  }

}

export const removeProduct = (name) => (dispatch) => {
  dispatch({type: REMOVE_ITEM, name});
}

export const clearProducts = () => ({type: CLEAR_ITEMS});

export const getProducts = ()  => (dispatch, getState) => {
  const {products} = getState();
  return products;

}



export default basketItems