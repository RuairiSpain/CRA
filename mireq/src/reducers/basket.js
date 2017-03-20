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
      return {
        name: action.name,
        quantity: action.quantity
      };
    case UPDATE_ITEM:
      if (state.name !== action.name) {
        return state;
      }
      return { ...state, quantity: state.quantity + action.quantity};
    default:
      return state;
  }
}

const basketItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, basketItem(undefined, action)];
    case UPDATE_ITEM:
      return state.map(item => basketItem(item, action))
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
  const existingItem = getState().find(item => item.name === name);
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

export const incrementProduct = (name) => (dispatch) => {
  addProduct(name);
}

export const decrementProduct = (name) => (dispatch, getState) => {
  const existingItem = getState().find(item => item.name === name);
    if(!!existingItem){
      updateProduct(name, existingItem.quantity - 1);
    }
}

export const removeProduct = (name) => (dispatch) => {
  dispatch({type: REMOVE_ITEM, name});
}

export const clearProducts = () => (dispatch) => {
  dispatch({type: CLEAR_ITEMS});
}

export const getProducts = () => (dispatch, getState) => {
  return getState();

}



export default basketItems