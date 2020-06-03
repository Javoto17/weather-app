import * as t from './actionsTypes'

const initialState = {
  data: [],
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
        data: payload,
        isLoading: false
      }

    default:
      return state
  }
}
