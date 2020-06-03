import * as t from './actionsTypes'

export const fetchForeCast = () => ({
  type: t.FETCH_FORECAST
})

export const fetchForeCastSuccess = (payload) => ({
  type: t.FETCH_FORECAST_SUCCESS,
  payload
})
