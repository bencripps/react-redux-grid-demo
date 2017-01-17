import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import gridIcon from './gridIcon.svg';
import {
  switchFeature
} from '../../redux/actions/appActions';
import './Sidebar.css';

class ExamplesSidebar extends Component {

  handleClick(item, event){
    event.preventDefault();
    console.log("handleClick: ", item);

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    this.props.switchFeature(capitalizeFirstLetter(item));
    this.props.changeRoute('/' + item);
  }

  render() {
    const { featureTitles } = this.props.app;
    const listItems = featureTitles.map((featureTitle) => {
      let boundClick = this.handleClick.bind(this, featureTitle);
      return (<li key={featureTitle}> <button onClick={boundClick}><img src={gridIcon} className="gridIcon" alt="grid logo" /><p className="gridLabel">{featureTitle}</p></button></li>)
    });
    return (
        <div className="sidebarContainer">
           <h2>Examples</h2>
           <ul>
            {listItems}
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