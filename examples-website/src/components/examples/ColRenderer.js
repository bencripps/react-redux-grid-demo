import React, { PropTypes } from 'react';
import { Grid } from 'react-redux-grid';

import {
    data,
    pageSize,
    events
} from './data/demodata';

export const ColRenderer = ({ store }) => {

    const cols = [{
        name: 'Phone',
        dataIndex: 'phone number',
        renderer: (ob) => {

            const imgProps = {
                src: '//icons.iconarchive.com/icons/icons8/windows-8/512/Mobile-Phone-icon.png',
                style: {
                    height: '20px'
                }
            };

            const spanProps = {
                style: {
                    position: 'relative',
                    top: '-5px',
                    left: '10px'
                }
            };

            return (
                <span>
                    <img { ...imgProps } />
                    <span { ...spanProps }>
                        { ob.row['Phone Number'] }
                    </span>
                </span>
                );
        }
    }];

    const colData = {
        columns: cols,
        data,
        pageSize,
        plugins: {},
        events,
        store,
        stateKey: 'colRenderer'
    };

    return (
        <Grid { ...colData } />
        );
};

const { object } = PropTypes;

ColRenderer.propTypes = {
    store: object.isRequired
};

ColRenderer.defaultProps = {};

export default ColRenderer;