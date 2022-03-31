import { combineReducers, createStore } from "redux";
import { statePageReduser } from "./statePageReduser";
import { userReduser } from "./userReduser";

const rootReduser = combineReducers({
    user: userReduser,
    statePage: statePageReduser,
})
export const store = createStore(rootReduser)