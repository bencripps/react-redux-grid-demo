/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Grid, Actions } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events,
    dataSource
} from './data/demodata';

export class ErrorMessage extends Component {
    componentDidMount() {
        const { store } = this.props;

        store.dispatch(
            Actions.ErrorHandlerActions.setError({
                stateKey: 'error',
                error: 'An error occurred!'
            })
        );
    }

    render() {
        const errorData = {
            columns,
            data: [],
            pageSize,
            plugins: {
                ERROR_HANDLER: {
                    defaultErrorMessage: 'AN ERROR OCURRED',
                    enabled: true
                }
            },
            events,
            store: this.props.store,
            stateKey: 'error'
        };

        return (
            <Grid { ...errorData } />
        );
    }
};

const { object } = PropTypes;

ErrorMessage.propTypes = {
    store: object.isRequired
};

ErrorMessage.defaultProps = {};

export default ErrorMessage;