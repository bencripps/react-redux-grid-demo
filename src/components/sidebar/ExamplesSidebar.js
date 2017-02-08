import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import gridIconOff from './gridBlueIcon.svg';
import gridIconOn from './gridPurpleIcon.svg';
import {
  switchFeature
} from '../../redux/actions/appActions';
import './Sidebar.css';

class ExamplesSidebar extends Component {

  constructor(props){
    super(props);
    let selectedFeature = this.props.app.featureTitle;
    this.state = { selectedFeature };
  }

  componentWillReceiveProps(nextProps){
    this.props = nextProps; 
    this.setState({
      selectedFeature: this.props.app.featureTitle
    });
  }

  componentDidUpdate(){
    let selectedFeature = this.props.app.featureTitle;
    this.setState({ selectedFeature });
  }

  handleClick(item, event){
    event.preventDefault();
    
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
      if (this.state.selectedFeature === featureTitle) 
        return  (<li key={featureTitle}> <button onClick={boundClick} className="gridButtonOn"><img src={gridIconOn} className="gridIcon" alt="grid logo" /><p className="gridLabelOn">{featureTitle}</p></button></li>)
      else 
        return (<li key={featureTitle}> <button onClick={boundClick} className="gridButtonOff"><img src={gridIconOff} className="gridIcon" alt="grid logo" /><p className="gridLabelOff">{featureTitle}</p></button></li>)
    });
    return (
        <div className="sidebarContainer examplesContainer">
           <h2 className="gridH2">Examples</h2>
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