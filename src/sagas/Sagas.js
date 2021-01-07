import {
  put, call, takeLatest, all,
} from 'redux-saga/effects'

import { SHAPE } from '../actions/types'
import { shape } from '../actions'

function* handleGet() {
  try {
    const response = yield call(fetch, 'shapes.json')
    const data = yield response.json()
    yield put(shape.success({ data }))
  } catch (e) {
    yield put(shape.failure({ error: { ...e } }))
  }
}

function* watchSagas() {
  yield all([
    takeLatest(SHAPE.GET, handleGet),
  ])
}

export default watchSagas
