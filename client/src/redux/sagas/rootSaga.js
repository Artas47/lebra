import { all } from "redux-saga/effects";
import { articlesSaga } from "./articlesSaga";
import { wordsSaga } from "./wordsSaga";

export default function* rootSaga() {
  yield all([articlesSaga(), wordsSaga()]);
}
