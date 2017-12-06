
import Utils from '../Utils/Utils';

export default function vi(command, state, dispatch) {
  if (command[1] == 'today') {
    dispatch({
      type: 'SAVE_DIRECTORY',
      directory: '/Dailies/2017-12-6',
    });
  } else if (command[1] == 'yesterday') {
    dispatch({
      type: 'SAVE_DIRECTORY',
      directory: '/Dailies/2017-12-5',
    });
  } else {
    dispatch({
      type: 'OUTPUT_MESSAGE',
      message: 'vi: invalid argument',
    });
  }
  return;
}
