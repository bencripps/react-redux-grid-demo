/* eslint-disable */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import { Reducers as gridReducers } from 'react-redux-grid';
import appReducers from './reducers/appReducers';
import bulkSelectionReducers from './reducers/bulkSelectionReducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
   ...gridReducers,
   app: appReducers,
   bulkSelection: bulkSelectionReducers,
   routing: routerReducer
});

export function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      loggerMiddleware,
      routerMiddleware(browserHistory),
      thunk
    )
  )
}

const store = configureStore();

export default store;
