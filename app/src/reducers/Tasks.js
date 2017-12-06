
const initialState = {
  projects: [
    {
      name: "bungu",
      tasks: [
        { completed: true, name: "Add Stripe integration" },
        { completed: false, name: "New Rails API" },
      ],
    },
    {
      name: "Anagma",
      tasks: [
        { completed: true, name: "Fix loading animation" }
      ],
    },
    {
      name: "Mamoru Pay",
      tasks: [
        { completed: false, name: "New product icons" },
        { completed: false, name: "Product admin access" },
        { completed: false, name: "QR image server" },
      ],
    },
    {
      name: "This project",
      tasks: [
        { completed: false, name: "PRESENTATION" },
      ],
    }
  ]
};
export default function terminal(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
