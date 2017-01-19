/* eslint-disable */
import fetch from 'isomorphic-fetch';
import * as types from '../types/types';

export const requestFakeData = (message) => {
  return {
    type: types.REQUEST_DATA_FAKE,
    value: message
  };
}

export const receiveFakeDataSuccess = (message) => {
  return {
    type: types.REQUEST_DATA_FAKE_SUCCESS,
    value: message
  };
}

export const receiveFakeDataSuccessFail = () => {
  return {
    type: types.REQUEST_DATA_FAKE_FAIL
  };
}

export const fetchFakeData = () => {
  return dispatch => {
      console.log("actions_app dispatching simulateTransform");
      requestFakeData();
      setTimeout( ()=>{
        receiveFakeDataSuccess();
      }, 1000); 
  }
}