let intialState = {
  count: 0,
};

function reducer(state = intialState, action) {
  console.log("action:", action);
  if (action.type === "DECREASEMENT") {
    return { ...state, count: state.count + 1 };
  }
}

export default reducer;
