import { combineReducers } from 'redux';
import Terminal from './Terminal';
import Dailies from './Dailies';

const reducer = combineReducers({
  Terminal,
  Dailies,
});

export default reducer;
