import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES,
  START_LOADING,
  STOP_LOADING,
} from "../types";

export function* fetchArticlesAsync({ type }) {
  try {
    yield put({ type: START_LOADING, payload: { action: { name: type } } });
    const response = yield axios.get(`http://localhost:3001/api/articles`);
    yield put({ type: FETCH_ARTICLES_SUCCESS, payload: response.data });
  } catch (error) {
  } finally {
    yield put({ type: STOP_LOADING, payload: { action: { name: type } } });
  }
}

export function* fetchArticles() {
  yield takeLatest(FETCH_ARTICLES, fetchArticlesAsync);
}

export function* articlesSaga() {
  yield all([call(fetchArticles)]);
}
