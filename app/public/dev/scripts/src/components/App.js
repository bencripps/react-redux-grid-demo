import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { PREFIX } from './../constants';
import Navigation from './app/Navigation';
import GridContainer from './app/GridContainer';

import './../style/main.styl';

const TITLE = 'React Redux Grid';

export const App = (
  { grid, store }
) => {

    const titleProps = {
        className: `${PREFIX}app-title`
    };

    const className = `${PREFIX}app-container`;

    grid = grid ? grid : location.hash.substring(1);

    return (
        <div>
            <h1 { ...titleProps }>
                { TITLE }
            </h1>
            <div { ...{ className } }>
                <Navigation { ...{ grid, store } }/>
                <GridContainer { ...{ grid, store } }/>
            </div>
        </div>
        );
};

const { object, string } = PropTypes;

App.propTypes = {
    className: string,
    store: object.isRequired,
    uiModifiers: object,
    uiStates: object
};

App.defaultProps = {
    uiModifiers: {},
    uiStates: {}
};

function mapStateToProps(state) {
    return {
        grid: state.app.get('grid')
    };
}

export default connect(mapStateToProps)(App);