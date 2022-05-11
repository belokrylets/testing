const defaultState = {
  currentBlock: "mathematics",
  currentquestion: 0,
};

export const blocksReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_BLOCK":
      return { ...state, currentBlock: "capitals", currentquestion: 0 };
    case "RESET_BLOCK":
      return { ...state, currentBlock: "mathematics", currentquestion: 0 };
      case "CHANGE_CURRENT_QUESTION":
        return { ...state, currentquestion: state.currentquestion + 1 };
    default:
        return state;
  }
};
