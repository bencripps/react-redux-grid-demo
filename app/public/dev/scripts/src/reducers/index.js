import { combineReducers } from 'redux';
import { Reducers } from 'react-redux-grid';

import app from './components/app';

export const rootReducer = combineReducers({
    app,
    ...Reducers
});

export default rootReducer;

