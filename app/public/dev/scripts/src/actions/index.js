import {
    LOAD_SIMPLE,
    LOAD_COMPLEX,
    LOAD_STICKY
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