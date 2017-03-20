/* eslint-disable */
import React from 'react';
import * as _ from "lodash";   
import store from './../../../redux/configureStore'; 
import { events } from '../data/demodata';
import { Grid } from 'react-redux-grid';

// the BulkSelection example will display a message after you select several rows and click the Bulk Action button
const getBulkSelectionSelectedRows = props => {

    console.log("getBulkSelectionSelectedRows props: ", props);

    const totalRowsSelected = ( undefined !== props.selection.get('bulk') && undefined !== props.selection.get('bulk').get("indexes") ) ? props.selection.get('bulk').get("indexes").length : 0;
    const rowsSelectedMessage = (totalRowsSelected > 0) ? totalRowsSelected + " Rows Selected" : "0 Rows Selected";

    if ( props.app.featureTitle === "BulkSelection" && props.bulkSelection.recordsRemoved.length > 0 ) {
      
        const emails = _.map( props.bulkSelection.recordsRemoved, record => {
            console.log("record ", record);
            return (<li key={record.Email}>{record.Email}</li>)
        }); 
       
        const discStyle = {listStyleType:"disc", marginLeft: "20px", color:"#644581"}; 
        const selectedIndexes = props.selection.get('bulk').get("indexes");

        return (<div>You have selected { ( undefined !== selectedIndexes ) ?  selectedIndexes.length : 0 } records with the following emails: 
                  <ul style={discStyle}>
                  {emails}
                  </ul>
                </div> )
  } else if (props.app.featureTitle === "BulkSelection") {
        return (<div>{rowsSelectedMessage}</div>)
  } else {
      return null;
  }
}

export default getBulkSelectionSelectedRows;
