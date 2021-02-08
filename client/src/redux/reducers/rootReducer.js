import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import uiReducer from "./uiReducer";
import wordsReducer from "./wordsReducer";

const rootReducer = combineReducers({
  articles: articlesReducer,
  ui: uiReducer,
  words: wordsReducer,
});

export default rootReducer;
