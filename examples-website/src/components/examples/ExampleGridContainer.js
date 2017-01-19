import React, { Component } from 'react';
import './ExampleGridContainer.css';
import { connect } from 'react-redux';
import store from './../../redux/configureStore';
import Simple from './Simple';
import Complex from './Complex';
import Sticky from './Sticky';
import ColRenderer from './ColRenderer';
import Tree from './Tree';
import Stress from './Stress';
import Bootstrap from './Bootstrap';
import Editable from './Editable';

class ExampleGridContainer extends Component {

  render() {

    const getGrid = (path) => {
      switch(path) {
        case "/Bootstrap" :
         return (<Bootstrap { ...{ store } } />);
        case "/colRenderer" :
         return (<Sticky { ...{ store } } />);
        case "/tree" :
         return (<Sticky { ...{ store } } />);
        case "/stress" :
         return (<Sticky { ...{ store } } />);
        case "/sticky" :
         return (<Sticky { ...{ store } } />);
        case "/editable" :
         return (<Editable { ...{ store } } />);
        case "/complex" :
         return (<Complex { ...{ store } } />);
        case "/simple" :
        default :
         return (<Simple { ...{ store } } />);
      }
    }

    const path = this.props.location.pathname; 

    return (
        <div className="simpleContainer">
          <h2>{this.props.app.featureTitle}</h2>
          { getGrid(path, store) }
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