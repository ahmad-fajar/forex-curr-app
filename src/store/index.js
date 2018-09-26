import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import currencyReducer from '../reducers/CurrencysReducer'

const rootReducer = combineReducers({
  currencyManager: currencyReducer
})

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware)

// const store = createStore(
//   rootReducer, /* preloadedState, */
//   middleware,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

export default store
