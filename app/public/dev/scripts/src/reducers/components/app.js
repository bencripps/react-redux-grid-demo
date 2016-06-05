import { fromJS } from 'immutable';

import {
    LOAD_SIMPLE,
    LOAD_COMPLEX,
    LOAD_STICKY
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

    default:
        return state;
    }
}