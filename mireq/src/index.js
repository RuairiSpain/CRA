import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'
import App from './App'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';


let store = createStore(reducers,  composeWithDevTools(
  // other store enhancers if any
));

ReactDOM.render(
   <Provider store={store}>
     <App />
    </Provider>,
  document.getElementById('root')
);
