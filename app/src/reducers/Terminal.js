
const initialState = {
  output: '',
};
export default function terminal(state = initialState, action) {
  switch (action.type) {
    case 'OUTPUT_MESSAGE':
      return Object.assign({}, state, {
        output: action.message,
      });
    default:
      return state;
  }
}
