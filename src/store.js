import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer,composeEnhancers(
  applyMiddleware(sagaMiddleware)
));
// create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
// export const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application
