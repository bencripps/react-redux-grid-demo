import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Sidebar.css';

class FeaturesSidebar extends Component {

  constructor(props){
    super(props);
    this.handleClickSimple = this.handleClickSimple.bind(this);
    this.handleClickAllFeatures = this.handleClickAllFeatures.bind(this);
  }

  handleClickSimple(event){
    event.preventDefault();

  }

  handleClickAllFeatures(event){
    event.preventDefault();

  }

  render() {
    const { features } = this.props.app;
    const listItems = features.map((feature) =>
      <li key={feature}>{feature}</li>
    );

    return (
        <div className="sidebarContainer featuresContainer">
          <h2 className="gridH2">Features</h2>
           <ul>
             {listItems}
           </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(FeaturesSidebar);