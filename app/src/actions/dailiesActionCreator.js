import axios from 'axios';

export function fetchDailies() {
  return dispatch => {
    return axios.get(
      'http://0.0.0.0:3000/dailies',
    ).then(response => {
      const dailies = response.data.dailies.map(daily => {
        return {
          id: daily.id,
          year: daily.year,
          month: daily.month,
          date: daily.date,
          focused: false,
        }
      });
      dailies[0].focused = true;
      dispatch({
        type: 'SET_DAILIES',
        dailies
      });
    });
  }
}

export function shiftFocus(next) {
  return dispatch => {
    dispatch({
      type: 'SHIFT_FOCUS',
      next
    });
  }
}
