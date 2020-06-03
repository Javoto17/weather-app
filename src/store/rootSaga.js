import { all, spawn } from 'redux-saga/effects'
import { fetchForecastSaga } from './forecast/saga'

export default function * rootSaga () {
  yield all([spawn(fetchForecastSaga)])
}
