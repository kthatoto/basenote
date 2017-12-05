import axios from 'axios';

export function initCursor() {
  return dispatch => {
    dispatch({
      type: 'INIT_CURSOR',
    });
  }
}
