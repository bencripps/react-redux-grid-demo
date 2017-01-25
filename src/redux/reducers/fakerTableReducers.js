/* eslint-disable */
import * as types from "../types/types";
import {getColumns, getRows} from './FakerData'; 

const initialState = {
    status: "ok",
    isScrolling: false,
    rows: getRows(5),
    columns: getColumns(),   
    totalRows: 5  
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.APP_READY:
      return {
        ...state,
        ready: true
      };
    default:
      return state;
    switch (action.type) {
    case types.GRID_STATUS_CHANGE:
      return {
        ...state,
        status: "ok"
      };
    case types.GRID_ROWS_ADD:
    case types.GRID_ROWS_UPDATE:
    case types.GRID_COPY_PASTE:
    case types.GRID_CELL_DRAG:
      return  {
        ...state,
        rows: action.rows,
        totalRows: action.rows.size
      };  
    default:
      return state
  }  
  }
}

export function ready() {
  return {
    type: types.APP_READY
  };
}
