import React, { PropTypes } from 'react';
import { Grid } from 'react-redux-grid';
//import shojigrid from '../../../shojigrid';

import {
    pageSize,
    events,
    dataSource
} from '../data/demodata';

export const SimpleGrid = ({ store, rows, columns }) => {

    const simpleData = {
        columns,
        data: rows,
        pageSize,
        plugins: {},
        events,
        dataSource,
        store,
        stateKey: 'simple'
    };

    return (
        <Grid { ...simpleData } />
        );
};

const { object } = PropTypes;

SimpleGrid.propTypes = {
    store: object.isRequired
};

SimpleGrid.defaultProps = {};

// let's get inspired by the Sematable approach ;-D 
// see src/shojigrid.js which is simply a renamed sematable.js and obvioulsy won't work until we update it
// to do this:
//export default shojigrid("SimpleGrid", rows, columns, SimpleGrid);
export default SimpleGrid;