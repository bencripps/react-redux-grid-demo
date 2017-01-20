import React, { Component, PropTypes } from 'react';
import { Grid } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events,
    dataSource
} from './data/demodata';

export class Editable extends Component {

    render() {

        const { store } = this.props;
        const { on } = this.state;

        const editableProps = {
            columns,
            data: on ? [] : data,
            pageSize,
            plugins: {
                EDITOR: {
                    enabled: true,
                    type: 'grid'
                }
            },
            events,
            store,
            stateKey: 'editable'
        };

        return <Grid { ...editableProps } />;
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = () => {
        const { on } = this.state;
        this.setState({ on: !on });
    }
}

const { object } = PropTypes;

Editable.propTypes = {
    store: object.isRequired
};

Editable.defaultProps = {};

export default Editable;