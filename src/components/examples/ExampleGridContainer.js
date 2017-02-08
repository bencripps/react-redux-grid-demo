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

class ExampleGridContainer extends Component {

  shouldComponentUpdate(){
    return true; 
  }

  render() {

    //let path = this.props.location.pathname; 
    let title = this.props.app.featureTitle; 

    let getGrid = (title) => {
      console.log("ExampleGridContainer getGrid title: ", title)
      switch(title) {
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

    return (
        <div className="simpleContainer">
          <h2 className="gridH2">{this.props.app.featureTitle}</h2>
          { getGrid(title) }
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  faker: state.faker,
  grid: state.grid,
  app: state.app
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ExampleGridContainer);