
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
        { string: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm" },
        { string: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim " },
        { string: "iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea " },
        { string: "modo consequat. Duis aute irure dolor in reprehenderit in voluptate v" },
        { string: "t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca" },
        { string: "upi datat non proident, sunt in culpa qui officia deserunt mollit ani" },
        { string: "d est laborum." },
      ],
    },
    {
      label: "2017-12-4",
      content: [
        { string: "nihonngo no nyuuryoku ha mada dekimasenn" },
        { string: "nihonngo no touhaba font wo mituketara dekiruyouni narimasu" },
        { string: "toriaezu dummy no bunnsouga hosii" },
        { string: "nannka tekitouni utte tara soreppoku mieruyone?" },
        { string: "iroiro tekitouna bunnshou desu" },
        { string: "kopipedato mibae waruikara, channto mojiwo utuyo" },
      ],
    },
    {
      label: "2017-12-3",
      content: [
        { string: "sl command jissou sitakattanaa" },
        { string: "sl to ls wo matigaete sl to ututo sl kishaga jama wo suru command" },
        { string: "desu" },
      ],
    },
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
