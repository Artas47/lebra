import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";

export function* fetchArticlesAsync({ payload }) {
  try {
    const response = yield axios.get(`http://localhost:3001/api/articles`);
    yield put({ type: "FETCH_ARTICLES", payload: response.data });
  } catch (error) {}
}

export function* fetchArticles() {
  yield takeLatest("FETCH_ARTICLES_START", fetchArticlesAsync);
}

export function* articlesSaga() {
  yield all([call(fetchArticles)]);
}
