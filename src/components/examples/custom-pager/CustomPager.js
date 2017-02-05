/* eslint-disable */
import React, { PropTypes } from 'react';
import { Grid } from 'react-redux-grid';

import Pager from './Pager';
import Api from './Api';

import {
    columns,
    data,
    pageSize,
    events,
    dataSource
} from './..//data/demodata';

export const CustomFooter = ({ store }) => {

    const customFooter = {
        columns,
        dataSource: Api,
        plugins: {
            PAGER: {
                enabled: true,
                pagingType: 'remote',
                pagerComponent: (
                    <Pager
                        api={Api}
                        store={store}
                    />
                )
            }
        },
        events,
        store,
        stateKey: 'custom-pager'
    };

    return <Grid { ...customFooter } />;
};

const { object } = PropTypes;

CustomFooter.propTypes = {
    store: object.isRequired
};

CustomFooter.defaultProps = {};

export default CustomFooter;