
const initialState = {
  projects: [
    {
      title: "bungu",
      taskCount: 12,
      urgentTaskCount: 1,
    },
    {
      title: "Anagma",
      taskCount: 3,
      urgentTaskCount: 0,
    },
    {
      title: "Mamoru Pay",
      taskCount: 9,
      urgentTaskCount: 3,
    },
    {
      title: "This projects",
      taskCount: 512,
      urgentTaskCount: 1,
    },
  ],
};
export default function terminal(state = initialState, action) {
  switch (action.type) {
    case 'none':
      return Object.assign({}, state, {
      });
    default:
      return state;
  }
}
