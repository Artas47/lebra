import { FETCH_WORD_SUCCESS } from "../types";

const initialState = {
  word: [],
};

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WORD_SUCCESS:
      return { ...state, word: action.payload };
    default:
      return { ...state };
  }
}
