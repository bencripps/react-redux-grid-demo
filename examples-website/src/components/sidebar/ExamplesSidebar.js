import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {
  switchFeature
} from '../../redux/actions/appActions';
import './Sidebar.css';

class ExamplesSidebar extends Component {

  constructor(props){
    super(props);
    this.handleClickSimple = this.handleClickSimple.bind(this);
    this.handleClickAllFeatures = this.handleClickAllFeatures.bind(this);
  }

  handleClickSimple(event){
    event.preventDefault();
    this.props.switchFeature('Simple');
    this.props.changeRoute('/simple');
  }

  handleClickAllFeatures(event){
    event.preventDefault();
    this.props.switchFeature('All Features');
    this.props.changeRoute('/all-features');
  }

  render() {
    return (
        <div className="sidebarContainer">
           <h2>Examples</h2>
           <ul>
             <li><button onClick={this.handleClickAllFeatures}>All Features</button></li>
             <li><button onClick={this.handleClickSimple}>Simple</button></li>
           </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app
});


const mapDispatchToProps = (dispatch) => {
    return {
      changeRoute: (url) => dispatch(push(url)),
      switchFeature: (featureTitle) => dispatch(switchFeature(featureTitle)),
      dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamplesSidebar);