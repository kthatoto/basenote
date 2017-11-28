import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/Index';

const loggerMiddleware = createLogger();

export default function createStoreWithMiddleware() {
  const store = applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )(createStore);
  return store(rootReducer);
}
