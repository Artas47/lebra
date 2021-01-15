import { all } from "redux-saga/effects";

function* fetchPosts() {}

export default function* rootSaga() {
  yield all([fetchPosts()]);
}
