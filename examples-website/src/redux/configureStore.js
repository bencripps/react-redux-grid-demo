/* eslint-disable */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import { Reducers as gridReducers } from 'react-redux-grid';
import appReducers from './reducers/appReducers';
import fakerTableReducers from './reducers/fakerTableReducers';
import { routerReducer } from 'react-router-redux';
import { createHistory } from 'history';

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
      loggerMiddleware
    )
  )
}

const store = configureStore();

export default store;
