import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import appReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = (state, action) => appReducer(state, action)

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return applyMiddleware(...middleware, logger)
  }
  return applyMiddleware(...middleware)
}

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )

  sagaMiddleware.run(rootSaga)

  return store
}
