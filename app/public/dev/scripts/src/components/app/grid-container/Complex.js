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
        columns,
        data,
        pageSize,
        plugins: {
            ...plugins,
            GRID_ACTIONS: {
                iconCls: 'action-icon',
                menu: [
                    {
                        text: 'Delete',
                        EVENT_HANDLER: ({ metaData }) => {
                            const index = metaData.rowIndex;
                            const newData = store.getState()
                                .dataSource
                                .getIn([stateKey, 'data'])
                                .delete(index);

                            store.dispatch(
                                Actions.GridActions.setData({
                                    stateKey,
                                    data: newData
                                })
                            );
                        }
                    }
                ]
            }
        },
        events,
        dataSource,
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