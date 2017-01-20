import React, { PropTypes } from 'react';
import { Grid, Actions } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events,
    plugins,
    dataSource
} from './data/demodata';

export const Complex = ({ store }) => {

    const stateKey = 'complex';

    const complexData = {
        columns: [
            {
                name: 'Name',
                width: '10%',
                className: 'additional-class',
                dataIndex: 'Name',
                sortable: true,
                HANDLE_CLICK: () => { console.log('Header Click'); }
            },
            {
                name: 'Phone Number',
                width: '20%',
                dataIndex: 'Phone Number',
                sortable: true,
                className: 'additional-class'
            },
            {
                name: 'Email',
                width: '25%',
                dataIndex: 'Email',
                sortable: true,
                className: 'additional-class',
                defaultSortDirection: 'descend'
            },
            {
                name: 'Address',
                dataIndex: 'Address',
                sortable: true,
                width: '35%',
                className: 'additional-class'
            }
        ],
        data,
        pageSize,
        plugins: {
            ...plugins,
            BULK_ACTIONS: {
                enabled: true
            },
            GRID_ACTIONS: {
                iconCls: 'action-icon',
                menu: [
                    {
                        text: 'Delete',
                        EVENT_HANDLER: ({ metaData }) => {
                            const rowIndex = metaData.rowIndex;

                            store.dispatch(
                                Actions.EditorActions.removeRow({
                                    stateKey,
                                    rowIndex
                                })
                            );
                        }
                    }
                ]
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