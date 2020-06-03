import * as t from './actionsTypes'

import {
  createDataTempByField,
  createDataHumidity,
  createDataPressure,
  createDataWind
} from '../../utils/charts'
import { getRandomDouble, getRandomInt } from '../../utils/random'

const initialState = {
  temperatureData: {},
  pressureData: [],
  humidityData: [],
  windChart: [],
  isLoading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case t.FETCH_FORECAST:
      return {
        ...state,
        isLoading: true
      }
    case t.FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        temperatureData: {
          temp_min: createDataTempByField(payload.list, 'temp_min'),
          temp: createDataTempByField(payload.list, 'temp'),
          temp_max: createDataTempByField(payload.list, 'temp_max')
        },
        pressureData: createDataPressure(payload.list),
        humidityData: createDataHumidity(payload.list),
        windChart: createDataWind(payload.list),
        isLoading: false
      }
    case t.UPDATE_HUMIDITY:
      return {
        ...state,
        humidityData: state.humidityData.map((item) => ({
          ...item,
          humidity: item.humidity - getRandomInt()
        })),
        isLoading: false
      }
    case t.UPDATE_PRESSURE:
      return {
        ...state,
        pressureData: state.pressureData.map((item) => ({
          ...item,
          pressure: item.pressure * getRandomDouble(),
          sea_level: item.sea_level * getRandomDouble(),
          grnd_level: item.grnd_level * getRandomDouble()
        })),
        isLoading: false
      }
    case t.UPDATE_TEMPERATURES:
      return {
        ...state,
        temperatureData: {
          temp_min: state.temperatureData.temp_min.map((item) => ({
            ...item,
            y: item.y * getRandomDouble()
          })),
          temp: state.temperatureData.temp.map((item) => ({
            ...item,
            y: item.y / getRandomDouble()
          })),
          temp_max: state.temperatureData.temp_max.map((item) => ({
            ...item,
            y: item.y / getRandomDouble()
          }))
        },
        isLoading: false
      }
    default:
      return state
  }
}
