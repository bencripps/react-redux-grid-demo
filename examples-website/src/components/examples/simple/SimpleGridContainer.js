import React, { Component } from 'react';
import './SimpleGridContainer.css';
import { Store as store } from 'react-redux-grid';
import { connect } from 'react-redux';
import SimpleGrid from './SimpleGrid';
import {
  fetchFakeData,
} from '../../../redux/actions/fakerTableActions';

class SimpleGridContainer extends Component {
  render() {
    const {rows, columns} = this.props.faker;
    
    const rowMaps = rows.toArray();
    const rowObjects = rowMaps.map( function(map){return map.toObject() });

    const columnObjects = columns.toArray();

    return (
        <div className="simpleContainer">
          <h2>{this.props.app.featureTitle}</h2>
          {/* let's remove passing in the store... or perhaps you have a better idea using connect() */} 
          {/*<SimpleGrid data={rowObjects} columns={columnObjects} />*/}
          <SimpleGrid store={store} data={rowObjects} columns={columnObjects} /> 
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
    fetchData: () => {
      dispatch(fetchFakeData())
    },
    dispatch
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SimpleGridContainer);