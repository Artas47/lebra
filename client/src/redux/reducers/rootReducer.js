import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  articles: articlesReducer,
  ui: uiReducer,
});

export default rootReducer;
