

const initialState = {
  items: [],
};
export default function item(state = initialState, action) {
  switch (action.type) {
    case 'SUBMIT_ITEM':
      return Object.assign({}, state, {
        items: [
          {
            name: action.itemName,
          },
          ...state.items
        ],
      });
    default:
      return state;
  }
}
