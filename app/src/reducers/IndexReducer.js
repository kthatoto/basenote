import { combineReducers } from 'redux';
import Terminal from './Terminal';
import Dailies from './Dailies';
import Vim from './Vim';
import Projects from './Projects';
import Tasks from './Tasks';

const reducer = combineReducers({
  Terminal,
  Dailies,
  Vim,
  Projects,
  Tasks,
});

export default reducer;
