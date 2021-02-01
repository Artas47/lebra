import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_WORD_SUCCESS,
  FETCH_WORD,
  START_LOADING,
  STOP_LOADING,
} from "../types";

export function* fetchWordAsync({ type }) {
  try {
    yield put({ type: START_LOADING, payload: { action: { name: type } } });
    const response = yield axios.get(`http://localhost:3001/api/words/empty`);
    yield put({ type: FETCH_WORD_SUCCESS, payload: response.data });
  } catch (error) {
  } finally {
    yield put({ type: STOP_LOADING, payload: { action: { name: type } } });
  }
}

export function* fetchWord() {
  yield takeLatest(FETCH_WORD, fetchWordAsync);
}

export function* wordsSaga() {
  yield all([call(fetchWord)]);
}
