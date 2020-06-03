import { put, delay, takeLatest, call } from 'redux-saga/effects'

import * as a from './actions'
import * as t from './actionsTypes'

import { getForecast } from '../../services/forecast'

function * fetchForecast ({ payload }) {
  try {
    const data = yield call(getForecast, payload)
    yield delay(3000)
    yield put(a.fetchForeCastSuccess(data))
  } catch (error) {}
}

export function * fetchForecastSaga () {
  yield takeLatest(t.FETCH_FORECAST, fetchForecast)
}
