
const initialState = {
  output: '',
  currentDirectory: '/',
  resources: [
    { name: "Dailies", type: "directory", resources: [], },
    { name: "Projects", type: "directory", resources: [], },
    { name: "Tasks", type: "directory", resources: [], },
    { name: "Books", type: "directory", resources: [], },
    { name: "Pictures", type: "directory", resources: [], },
    { name: "Notes", type: "directory", resources: [], },
    { name: "Ideas", type: "directory", resources: [], },
    { name: "Pages", type: "directory", resources: [], },
    { name: "Scraps", type: "directory", resources: [], },
    { name: "Snippets", type: "directory", resources: [], },
  ],
};
export default function terminal(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_DIRECTORY':
      return Object.assign({}, state, {
        currentDirectory: action.directory,
      });
    case 'OUTPUT_MESSAGE':
      return Object.assign({}, state, {
        output: action.message,
      });
    case 'CHANGE_DIRECTORY':
      let currentDirectory = '';
      if (state.currentDirectory.length > 1) {
        currentDirectory = state.currentDirectory;
      }
      return Object.assign({}, state, {
        currentDirectory: currentDirectory + '/' + action.directory,
        output: '',
      });
    case 'BACK_ROOT_DIRECTORY':
      return Object.assign({}, state, {
        currentDirectory: '/',
      });
    case 'BACK_DIRECTORY':
      if (state.currentDirectory === '/') {
        return Object.assign({}, state, {
          output: '',
        });
      }
      let backDirectory =
        state.currentDirectory.slice(0, state.currentDirectory.lastIndexOf('/'));
      backDirectory = backDirectory.length == 0 ? '/' : backDirectory;
      return Object.assign({}, state, {
        currentDirectory: backDirectory,
        output: '',
      });
    default:
      return state;
  }
}
