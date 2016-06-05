import React, { PropTypes } from 'react';
import { Grid } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events,
    dataSource
} from './../../../demodata';

export const Simple = ({ store }) => {

    const simpleData = {
        columns,
        data,
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

Simple.propTypes = {
    store: object.isRequired
};

Simple.defaultProps = {};

export default Simple;