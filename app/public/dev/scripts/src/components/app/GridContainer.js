import React, { PropTypes } from 'react';
import { PREFIX } from './../../constants';

import Simple from './grid-container/Simple';
import Complex from './grid-container/Complex';
import Sticky from './grid-container/Sticky';

export const Navigation = (
  { grid, store }
) => {

    const className = `${PREFIX}grid-container`;

    const cmp = getGrid(grid, store);

    return (
        <div { ...{ className } }>
            { cmp }
        </div>
        );
};

const getGrid = (type, store) => {
    if (type === undefined || type === 'simple') {
        return (
            <Simple { ...{ store } } />
        );
    }

    else if (type === 'complex') {
        return (
            <Complex { ...{ store } } />
            );
    }

    else if (type === 'sticky') {
        return (
            <Sticky { ...{ store } } />
            );
    }
};

const { object } = PropTypes;

Navigation.propTypes = {
    store: object.isRequired
};

Navigation.defaultProps = {};

export default Navigation;