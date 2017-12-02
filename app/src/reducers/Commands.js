
const initialState = {
  currentDirectory: '/',
};
export default function commands(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DIRECTORY':
      return Object.assign({}, state, {
        currentDirectory: '/',
      });
    default:
      return state;
  }
}
