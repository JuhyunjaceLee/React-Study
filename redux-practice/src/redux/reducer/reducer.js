let intialState = {
  count: 0,
};

function reducer(state = intialState, action) {
  console.log("action:", action);
  switch (action.type) {
    case "DECREASEMENT":
      return { ...state, count: state.count - action.payload.num };
    case "INCREASEMENT":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

export default reducer;
