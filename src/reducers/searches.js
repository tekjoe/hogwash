const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_SEARCH":
      return [...state, action.search];
    case "GET_SEARCHES":
      return action.searches;
    default:
      return state;
  }
};
