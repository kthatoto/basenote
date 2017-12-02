
const initialState = {
  currentDirectory: '/',
  resources: [
    {
      name: "dailies",
      type: "directory",
      children: [],
    },
    {
      name: "projects",
      type: "directory",
      children: [],
    },
    {
      name: "tasks",
      type: "directory",
      children: [],
    },
  ],
};
export default function directories(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DIRECTORY':
      return Object.assign({}, state, {
        currentDirectory: '/',
      });
    default:
      return state;
  }
}
