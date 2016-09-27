import React, { PropTypes } from 'react';
import { Grid, Actions } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events,
    plugins,
    dataSource
} from './../../../demodata';

export const Complex = ({ store }) => {

    const stateKey = 'complex';

    const complexData = {
        showTreeRootNode: false,
        dataSource: '/gettreeData',
        gridType: 'tree',
        dragAndDrop: true,
        columns: [
            {
                name: 'Name',
                width: '30%',
                className: 'additional-class',
                dataIndex: 'Name',
                sortable: false,
                expandable: true
            },
            {
                name: 'Phone Number',
                dataIndex: 'Phone Number',
                sortable: false,
                className: 'additional-class'
            },
            {
                name: 'Email',
                dataIndex: 'Email',
                sortable: false,
                className: 'additional-class',
                defaultSortDirection: 'descend'
            },
            {
                name: 'Address',
                dataIndex: 'Address',
                sortable: false,
                className: 'additional-class'
            }
        ],
        data,
        plugins: {
            ...plugins,
            GRID_ACTIONS: null,
            SELECTION_MODEL: {
                mode: 'single'
            },
            PAGER: {
                enabled: false
            },
            BULK_ACTIONS: {
                enabled: false
            }
        },
        events,
        store,
        stateKey
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