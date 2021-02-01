import { FETCH_ARTICLES_SUCCESS, FETCH_ARTICLE_SUCCESS } from "../types";

const initialState = {
  articleItems: [],
  article: null,
};

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, articleItems: action.payload.articles };
    case FETCH_ARTICLE_SUCCESS:
      return { ...state, article: action.payload.article };
    default:
      return { ...state };
  }
}
