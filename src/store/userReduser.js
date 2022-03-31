const defaultState = {
    name: "s",
    surname: "",
    city: "",
    country: ""
  };

export const userReduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'DATA_INPUT':
            return  { ...state, [action.payload.name]: action.payload.value };
        case 'DATA_CLEARNING':
            return defaultState;
        default:
            return state;
    }
} 
