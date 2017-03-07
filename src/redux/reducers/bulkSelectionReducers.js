import * as types from "../types/types"; 
import {data} from "../../components/examples/data/demodata";
// import {SET_DATA} from "react-redux-grid/src/constants/ActionTypes"; how can I get the types?!

const initialState = {
  ready: false,
  pageSize: 10,
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
     case "@@react-redux-grid/SET_DATA":
     return {
        ...state,
        recordsRemaining: [],
        recordsRemoved: []
      };
    default:
      return state;
  }
}



