const defaultState = {
  statePage: "intro",
};

export const statePageReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "REGISTRATION":
      return { ...state, statePage: "registration" };
    case "TESTING":
      return { ...state, statePage: "testing" };
    case "RESULT":
      return { ...state, statePage: "result" };
    case "INTRO":
      return { ...state, statePage: "intro" };
    default:
      return state;
  }
};
