import {
    LOAD_SIMPLE,
    LOAD_COMPLEX,
    LOAD_STICKY,
    LOAD_COL_RENDERER
} from './../constants/actionTypes';

export const loadSimple = () => {
    return {
        type: LOAD_SIMPLE
    };
};

export const loadComplex = () => {
    return {
        type: LOAD_COMPLEX
    };
};

export const loadSticky = () => {
    return {
        type: LOAD_STICKY
    };
};

export const loadColRenderer = () => {
    return {
        type: LOAD_COL_RENDERER
    };
};