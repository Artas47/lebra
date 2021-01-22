import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { startAction, stopAction } from "../actions";

export function* fetchArticlesAsync({ type }) {
  console.log("type", type);
  try {
    yield put(startAction(type));
    const response = yield axios.get(`http://localhost:3001/api/articles`);
    yield put({ type: "FETCH_ARTICLES_SUCCESS", payload: response.data });
  } catch (error) {
  } finally {
    yield put(stopAction(type));
  }
}

export function* fetchArticles() {
  yield takeLatest("FETCH_ARTICLES", fetchArticlesAsync);
}

export function* articlesSaga() {
  yield all([call(fetchArticles)]);
}
