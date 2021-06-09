import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './ducks';

export default function configureStore() {
  const rootReducer = combineReducers(reducers);
  return createStore(rootReducer, applyMiddleware(thunk));
}
