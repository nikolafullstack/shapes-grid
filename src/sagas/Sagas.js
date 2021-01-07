import {
  put, call, takeLatest, all,
} from 'redux-saga/effects'

import { ITEM } from '../actions/types'
import { item } from '../actions'

function* handleGet() {
  try {
    const response = yield call(fetch, 'shapes.json')
    const data = yield response.json()
    yield put(item.success({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}

function* watchSagas() {
  yield all([
    takeLatest(ITEM.GET, handleGet),
  ])
}

export default watchSagas
