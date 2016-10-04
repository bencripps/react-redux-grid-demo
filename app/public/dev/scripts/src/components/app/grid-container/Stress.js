import React, { PropTypes } from 'react';
import { Grid } from 'react-redux-grid';

import {
    stressData
} from './../../../demodata';

export const Stress = ({ store }) => {

    const stateKey = 'stress';

    const stressProps = {
        columns: [
            {
                name: 'Name',
                width: '10%',
                className: 'additional-class',
                dataIndex: 'Name',
                sortable: false
            },
            {
                name: 'Phone Number',
                width: '20%',
                dataIndex: 'Phone Number',
                sortable: false
            },
            {
                name: 'Email',
                width: '25%',
                dataIndex: 'Email',
                sortable: false
            },
            {
                name: 'Address',
                dataIndex: 'Address',
                sortable: false 
            }
        ],
        data: stressData,
        pageSize: stressData.length,
        infinite: true,
        plugins: {
            PAGER: {
                enabled: false
            }
        },
        events: {},
        store,
        stateKey
    };

    return (
        <Grid { ...stressProps } />
        );
};

const { object } = PropTypes;

Stress.propTypes = {
    store: object.isRequired
};

Stress.defaultProps = {};

export default Stress;