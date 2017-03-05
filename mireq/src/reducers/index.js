import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import {reducer as form} from 'redux-form';
import info from './info';

export default combineReducers({
  routing: routerReducer,
  auth,
  form,
  info
});