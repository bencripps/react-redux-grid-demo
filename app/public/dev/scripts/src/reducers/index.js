import { combineReducers } from 'redux';
import { Reducers } from 'react-redux-grid';

import app from './components/app';

const gridReducers = {
    dataSource: Reducers.DataSource,
    editor: Reducers.Editor,
    errorHandler: Reducers.ErrorHandler,
    filter: Reducers.Filter,
    grid: Reducers.grid,
    loader: Reducers.Loader,
    menu: Reducers.Menu,
    pager: Reducers.Pager,
    selection: Reducers.Selection
};

export const rootReducer = combineReducers({
    app,
    ...gridReducers
});

export default rootReducer;

