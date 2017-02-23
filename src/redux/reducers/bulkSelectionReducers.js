import * as types from "../types/types"; 
import {data} from "../../components/examples/data/demodata";

const initialState = {
  ready: false,
  pageSize: 20,
  data: data,
  recordsRemaining: [],
  recordsRemoved: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.APP_READY:
      return {
        ...state,
        ready: true
      };
     case types.PAGING_CHANGE_LIMIT:
      return {
        ...state,
        pageSize: action.newPageLimit
      };  
    case types.GRID_ROWS_BULK_DELETE:
      return {
        ...state,
        data: action.newRows
      };  
     case types.BULK_DISPLAY:
      return {
        ...state,
        recordsRemaining: action.recordsRemaining,
        recordsRemoved: action.recordsRemoved
      };        
    default:
      return state;
  }
}



