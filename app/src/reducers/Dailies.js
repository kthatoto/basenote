
const initialState = {
  dailies: [],
};
export default function dailies(state = initialState, action) {
  switch (action.type) {
    case 'SET_DAILIES':
      return Object.assign({}, state, {
        dailies: action.dailies,
      });
    default:
      return state;
  }
}
