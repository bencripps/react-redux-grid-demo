/* eslint-disable */
import fetch from 'isomorphic-fetch';
import * as types from '../types/types';

export const switchFeature = (featureTitle) => {
  return {
    type: types.FEATURE_SWITCH,
    featureTitle
  };
}

export function ready() {
  return {
    type: types.APP_READY
  };
}