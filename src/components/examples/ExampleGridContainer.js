/* eslint-disable */
import React, { Component } from 'react';
import './ExampleGridContainer.css';
import { connect } from 'react-redux';
import store from './../../redux/configureStore';
import Simple from './Simple';
import Complex from './complex/Complex';
import Sticky from './Sticky';
import Stress from './Stress';
import ColRenderer from './ColRenderer';
import Tree from './Tree';
import Bootstrap from './bootstrap/Bootstrap';
import Editable from './Editable';
import CustomPager from './custom-pager/CustomPager';
import BulkSelection from './bulk-selection/BulkSelection';
import * as _ from "lodash";

class ExampleGridContainer extends Component {


  componentWillReceiveProps(nextProps, nextState){
    this.props = nextProps; 
  }

  shouldComponentUpdate(){
    return true; 
  }

  render() {

    const title = this.props.app.featureTitle; 

    const getGrid = (title) => {
      console.log("ExampleGridContainer getGrid title: ", title)
      switch(title) {
        case "BulkSelection" :
         return (<BulkSelection { ...{ store } } />);
        case "Bootstrap" :
         return (<Bootstrap { ...{ store } } />);
        case "ColRenderer" :
         return (<ColRenderer { ...{ store } } />);
        case "Tree" :
         return (<Tree { ...{ store } } />);
        case "Stress" :
         return (<Stress { ...{ store } } />);
        case "Sticky" :
         return (<Sticky { ...{ store } } />);
        case "Editable" :
         return (<Editable { ...{ store } } />);
        case "Complex" :
         return (<Complex { ...{ store } } />);        
        case "CustomPager" :
         return (<CustomPager { ...{ store } } />);
        case "Simple" :
        default :
         return (<Simple { ...{ store } } />);
      }
    }

    // the BulkSelection example will display a message after you select several rows and click the Bulk Action button
    const getResult = () => {

      if ( title === "BulkSelection" && this.props.bulkSelection.recordsRemoved.length > 0 ) {
          
        const emails = _.map( this.props.bulkSelection.recordsRemoved, record => {
            console.log("record ", record);
            return (<li key={record.Email}>{record.Email}</li>)
        }); 
       
        const discStyle = {listStyleType:"disc", marginLeft: "20px", color:"#644581"}; 
        const selectedIndexes = this.props.selection.get('bulk').get("indexes");

        return (<div>You have selected { ( undefined !== selectedIndexes ) ?  selectedIndexes.length : 0 } records with the following emails: 
                  <ul style={discStyle}>
                  {emails}
                  </ul>
                </div> )
      }
    }

    return (
        <div className="simpleContainer">
          <h2 className="gridH2">{this.props.app.featureTitle}</h2>
          { getResult() }
          { getGrid(title) }
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  faker: state.faker,
  grid: state.grid,
  app: state.app,
  bulkSelection: state.bulkSelection,
  selection: state.selection
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ExampleGridContainer);