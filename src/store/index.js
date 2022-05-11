import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { blocksReduser } from "./blocksReduser";
import { questionsReduser } from "./questionsReduser";
import { resultReduser } from "./resultReduser";
import { statePageReduser } from "./statePageReduser";
import { userReduser } from "./userReduser";

const rootReduser = combineReducers({
  user: userReduser,
  statePage: statePageReduser,
  questions: questionsReduser,
  blocks: blocksReduser,
  result: resultReduser
});
export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
