const defaultState = {
  correctAnswer: 0,
  currentAnswer: "",
  listAnswers: [],
  userResponse: {
    question: "",
    answer: "",
    isCorrect: "",
  },
};
export const resultReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_CORRECT_ANSWER":
      return { ...state, correctAnswer: action.payload };
    case "CHANGE_CURRENT_ANSWER":
      return { ...state, currentAnswer: action.payload };
    case "CHANGE_LIST_ANSWER":
      return {
        ...state,
        listAnswers: [...state.listAnswers, action.payload],
        userResponse: defaultState.userResponse,
      };
    case "CHANGE_USER_RESPONSE":
      return {
        ...state,
        userResponse: {
          ...state.userResponse,
          question: action.payload.question,
          answer: action.payload.answer,
          isCorrect: action.payload.isCorrect
        },
      };
    case "RESET_RESULT":
      return defaultState;
    default:
      return state;
  }
};
