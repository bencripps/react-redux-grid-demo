/* eslint-disable */
import React from 'react';
import * as _ from "lodash";   
import store from './../../../redux/configureStore'; 
import { events } from '../data/demodata';
import { Grid } from 'react-redux-grid';

// the BulkSelection example will display a message after you select several rows and click the Bulk Action button
const getBulkSelectionSelectedRows = props => {

    console.log("getBulkSelectionSelectedRows props: ", props);

    if ( props.app.featureTitle === "BulkSelection" && props.bulkSelection.recordsRemoved.length > 0 ) {
      
        const emails = _.map( props.bulkSelection.recordsRemoved, record => {
            console.log("record ", record);
            return (<li key={record.Email}>{record.Email}</li>)
        }); 
       
        const discStyle = {listStyleType:"disc", marginLeft: "20px", color:"#644581"}; 
        const selectedIndexes = props.selection.get('bulk').get("indexes");

        const simpleColumns = [
            {
                name: 'Name',
                width: '10%',
                className: 'additional-class',
                dataIndex: 'Name',
                HANDLE_CLICK: () => { console.log('Header Click'); }
            },
            {
                name: 'Phone Number',
                width: '20%',
                dataIndex: 'Phone Number Detail',
                className: 'additional-class'
            },
            {
                name: 'Address',
                dataIndex: 'Address',
                width: '70%',
                className: 'additional-class'
            }
        ];

        const simpleData = {
            columns: simpleColumns,
            data: props.bulkSelection.recordsRemoved,
            pageSize: props.bulkSelection.pageSize,
            plugins: {},
            events,
            store,
            stateKey: 'simple-again' // there is already a simple demo and the key needs to be unique but since this is a separate route, I should be fine to use "simple"?!
        };

        return (<div>You have selected { ( undefined !== selectedIndexes ) ?  selectedIndexes.length : 0 } records with the following emails: 
                  <ul style={discStyle}>
                  {emails}
                  </ul>
                  {/* <Grid { ...simpleData } /> */}
                </div> )
  } else {
        return null;
  }
}

export default getBulkSelectionSelectedRows;
