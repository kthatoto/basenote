import { combineReducers } from 'redux';
import Terminal from './Terminal';
import Dailies from './Dailies';
import Vim from './Vim';

const reducer = combineReducers({
  Terminal,
  Dailies,
  Vim,
});

export default reducer;
