import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/IndexReducer';

export default function createStoreWithMiddleware() {
  const store = applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )(createStore);
  return store(rootReducer);
}
