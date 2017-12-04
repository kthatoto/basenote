import axios from 'axios';

export function fetchDailies() {
  return dispatch => {
    return axios.get(
      'http://0.0.0.0:3000/check',
    ).then(response => {
      dispatch({
        type: 'SET_DAILIES',
        dailies: [],
      });
    });
  }
}
