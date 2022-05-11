const defaultState = {
  questions: [],
};
export const questionsReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};
