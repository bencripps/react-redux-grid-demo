/* eslint-disable */
import React, { PropTypes } from 'react';
import { Grid, Actions } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events,
    plugins,
} from './data/demodata';

export const Tree = ({ store }) => {

    const stateKey = 'complex';

    const complexData = {
        showTreeRootNode: false,
        dataSource: 'http://localhost:3001/gettreeData', 
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

Tree.propTypes = {
    store: object.isRequired
};

Tree.defaultProps = {};

export default Tree;