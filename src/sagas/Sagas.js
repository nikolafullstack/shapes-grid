// In case you need to use a selector
// import also select from redux-saga/effects
// and then simplie yield select(yourSelector())

import {
  put, call, takeLatest, all,
} from 'redux-saga/effects'

import { ITEM } from '../actions/types'

import { item } from '../actions'

function* handleGetOne(action) {
  try {
    const { id } = action.payload
    const response = yield call(fetch, 'shapes.json')
    const data = yield response.json()
    yield put(item.success({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}

function* watchSagas() {
  yield all([
    takeLatest(ITEM.GET_ONE, handleGetOne),
  ])
}

export default watchSagas
