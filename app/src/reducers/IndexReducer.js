import { combineReducers } from 'redux';
import Directories from './Directories';
import Terminal from './Terminal';

const reducer = combineReducers({
  Directories,
  Terminal,
});

export default reducer;
