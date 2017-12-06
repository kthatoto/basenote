
const initialState = {
  dailies: [
    {
      label: "2017-12-6",
      content: [{ string: " " }],
      focused: true,
    },
    {
      label: "2017-12-5",
      content: [
        { string: "test strings" }
      ],
    }
  ],
};
export default function dailies(state = initialState, action) {
  switch (action.type) {
    case 'SET_DAILIES':
      return Object.assign({}, state, {
        dailies: action.dailies,
      });
    case 'SHIFT_FOCUS':
      const dailies = state.dailies;
      let focusing = false;
      let focusShiftedDailies;
      if (action.next) {
        focusShiftedDailies = dailies.map((daily, index) => {
          if (focusing) {
            daily.focused = true;
            focusing = false;
          } else if (daily.focused && index < dailies.length - 1) {
            focusing = true;
            daily.focused = false;
          }
          return daily;
        });
      } else {
        focusShiftedDailies = dailies.reverse().map((daily, index) => {
          if (focusing) {
            daily.focused = true;
            focusing = false;
          } else if (daily.focused && index < dailies.length - 1) {
            focusing = true;
            daily.focused = false;
          }
          return daily;
        }).reverse();
      }
      return Object.assign({}, state, {
        dailies: focusShiftedDailies,
      });
    default:
      return state;
  }
}
