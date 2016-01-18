import React from 'react';
import { Grid, Store } from 'react-redux-grid';
import { Provider } from 'react-redux';

import {
    columns,
    data,
    pageSize,
    plugins,
    events,
    dataSource
} from './demodata';

const gridData = {
    columns,
    data,
    pageSize,
    plugins,
    events,
    dataSource,
    store: Store
};

export default (
    <Provider store={ Store }>
        <Grid { ...gridData } />
    </Provider>
);