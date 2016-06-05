import React, { PropTypes } from 'react';
import { Grid } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events,
    plugins,
    dataSource
} from './../../../demodata';

export const Complex = ({ store }) => {

    const complexData = {
        columns,
        data,
        pageSize,
        plugins,
        events,
        dataSource,
        store,
        stateKey: 'complex'
    };

    return (
        <Grid { ...complexData } />
        );
};

const { object } = PropTypes;

Complex.propTypes = {
    store: object.isRequired
};

Complex.defaultProps = {};

export default Complex;