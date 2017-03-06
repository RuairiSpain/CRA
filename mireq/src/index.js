import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom'

import reducers from './reducers/index'
import App from './App'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

let store = createStore(reducers, composeWithDevTools(
// other store enhancers if any
));

const NoMatch = ({location}) => (
  <div>
    <h3>No match for
      <code>{location.pathname}</code>
    </h3>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <div>
      <App/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/about" component={Contact}/>
      <Route component={NoMatch}/>
    </div>
  </Router>
</Provider>, document.getElementById('root'));
