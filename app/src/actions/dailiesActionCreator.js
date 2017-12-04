import axios from 'axios';

export function fetchDailies() {
  return dispatch => {
    return axios.get(
      'http://0.0.0.0:3000/dailies',
    ).then(response => {
      dispatch({
        type: 'SET_DAILIES',
        dailies: response.data.dailies,
      });
    });
  }
}
