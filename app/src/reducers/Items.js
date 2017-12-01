
const initialState = {
  items: [],
};
export default function items(state = initialState, action) {
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
    case 'DELETE_ITEM':
      const fileteredItems = state.items.filter((item, i) => i != action.index);
      return Object.assign({}, state, {
        items: fileteredItems,
      });

    default:
      return state;
  }
}
