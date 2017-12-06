import { combineReducers } from 'redux';
import Terminal from './Terminal';
import Dailies from './Dailies';
import Vim from './Vim';
import Projects from './Projects';

const reducer = combineReducers({
  Terminal,
  Dailies,
  Vim,
  Projects,
});

export default reducer;
