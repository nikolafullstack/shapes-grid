import { all, fork } from 'redux-saga/effects'
import watchSagas from './Sagas'

export default function* rootSaga() {
  yield all([
    fork(watchSagas),
  ])
}
