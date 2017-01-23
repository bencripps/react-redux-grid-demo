/* eslint-disable */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import { Reducers as gridReducers } from 'react-redux-grid';
import appReducers from './reducers/appReducers';
import fakerTableReducers from './reducers/fakerTableReducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
   ...gridReducers,
   app: appReducers,
   faker: fakerTableReducers,
   routing: routerReducer
});

export function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      loggerMiddleware,
      routerMiddleware(browserHistory)
    )
  )
}

const store = configureStore();

export default store;
