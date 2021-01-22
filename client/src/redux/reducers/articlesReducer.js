import { FETCH_ARTICLES_SUCCESS } from "../types";

const initialState = {
  articleItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, articleItems: action.payload.articles };
    default:
      return { ...state };
  }
};
