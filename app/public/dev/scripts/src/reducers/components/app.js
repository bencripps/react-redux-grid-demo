import { fromJS } from 'immutable';

import {
    LOAD_SIMPLE,
    LOAD_COMPLEX,
    LOAD_STICKY,
    LOAD_COL_RENDERER,
    LOAD_TREE,
    LOAD_STRESS,
    LOAD_BOOTSTRAP,
    LOAD_EDITABLE
} from '../../constants/actionTypes';

const initialState = fromJS({});

export default function gridState(state = initialState, action) {

    switch (action.type) {

    case LOAD_SIMPLE:
        return state.merge({
            grid: 'simple'
        });

    case LOAD_COMPLEX:
        return state.merge({
            grid: 'complex'
        });

    case LOAD_STICKY:
        return state.merge({
            grid: 'sticky'
        });

    case LOAD_COL_RENDERER:
        return state.merge({
            grid: 'colRenderer'
        });
    case LOAD_TREE:
        return state.merge({
            grid: 'tree'
        });

    case LOAD_STRESS:
        return state.merge({
            grid: 'stress'
        });

    case LOAD_BOOTSTRAP:
        return state.merge({
            grid: 'bootstrap'
        });

    case LOAD_EDITABLE:
        return state.merge({
            grid: 'editable'
        });

    default:
        return state;
    }
}