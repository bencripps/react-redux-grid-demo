import React, { PropTypes } from 'react';
import { Grid } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events,
    plugins
} from './../../../demodata';

export const Sticky = ({ store }) => {

    const stickyData = {
        columns,
        data,
        pageSize,
        plugins: {
            ...plugins,
            STICKY_HEADER: {
                enabled: true
            },
            STICKY_FOOTER: {
                enabled: true
            },
            FILTER_CONTAINER: {
                enabled: false
            },
            BULK_ACTIONS: {
                enabled: false
            }
        },
        height: '',
        events,
        store,
        stateKey: 'sticky'
    };

    return (
        <Grid { ...stickyData } />
        );
};

const { object } = PropTypes;

Sticky.propTypes = {
    store: object.isRequired
};

Sticky.defaultProps = {};

export default Sticky;