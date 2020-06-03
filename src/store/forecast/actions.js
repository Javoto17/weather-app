import * as t from './actionsTypes'

export const fetchForeCast = () => ({
  type: t.FETCH_FORECAST
})

export const fetchForeCastSuccess = (payload) => ({
  type: t.FETCH_FORECAST_SUCCESS,
  payload
})

export const updatePressure = () => ({
  type: t.UPDATE_PRESSURE
})

export const updateTemparatures = () => ({
  type: t.UPDATE_TEMPERATURES
})

export const updateHumidity = () => ({
  type: t.UPDATE_HUMIDITY
})

export const updateWind = () => ({
  type: t.UPDATE_WIND
})
