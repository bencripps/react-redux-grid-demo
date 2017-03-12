/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Actions, Grid } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events,
    dataSource
} from './../data/demodata';

import './loader.css';

export class CustomLoader extends Component {
    render() {

        const { store } = this.props;
        const loaderData = {
            columns,
            data,
            pageSize,
            plugins: {
                LOADER: {
                    enabled: true
                }
            },
            events,
            store,
            classNames: ['custom-loader'],
            stateKey: 'custom-loader',

        };

        return (
            <Grid { ...loaderData } />
        );
    }

    componentDidMount() {
        const { store } = this.props;

        store.dispatch(
            Actions.LoaderActions.setLoaderState({
                state: true,
                stateKey: 'custom-loader'
            })
        )
    }
};

const { object } = PropTypes;

CustomLoader.propTypes = {
    store: object.isRequired
};

CustomLoader.defaultProps = {};

export default CustomLoader;