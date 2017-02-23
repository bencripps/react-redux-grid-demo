/* eslint-disable */
import fetch from 'isomorphic-fetch';
import * as types from '../types/types';

export const bulkDisplay = newData => {
  return {
    type: types.BULK_DISPLAY,
    recordsRemaining: newData.removed,
    recordsRemoved: newData.remaining
  };
}

export const changePageLimit = newPageLimit => {
  return {
    type: types.PAGING_CHANGE_LIMIT,
    newPageLimit
  };
}