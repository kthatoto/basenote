import axios from 'axios';

export function changeDirectory(directory) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_DIRECTORY',
      directory
    });
  }
}
