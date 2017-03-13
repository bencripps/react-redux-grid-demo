/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-redux-grid';
import * as BulkSelectionActions from '../../../redux/actions/bulkSelectionActions';
import * as _ from 'lodash';

import {
    columns,
    data,
    pageSize,
    events,
    dataSource,
    pagingDataSource
} from './..//data/demodata';

class BulkPager extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentPageLimit: 10
        };
        this.handleBulkActionClick = this.handleBulkActionClick.bind(this); 
        this.handleSelectChange = this.handleSelectChange.bind(this); 
        this.handleNumberedPageButtonClick = this.handleNumberedPageButtonClick.bind(this);

    }

    getSelectedIds() {

       const bulkMap = this.props.selection.get("bulk");
       const selectedIds = bulkMap.get("indexes");

       if (undefined !== selectedIds) {
           return selectedIds; 
        } else {
            // you could dispatch a notification... 
            // this.props.displayWarningRequestMessage("No rows selected");
            console.warn("BulkPage selectedIds were false! no rows selected");
            console.log( bulkMap.toJSON() );
            return [];
        }  
    };

    handleBulkActionClick(e) {
        e.preventDefault(); 
        const selectedIds = this.getSelectedIds();

        //const currentPageRecords = this.props.gridData.get("data").toJSON(); 
        
        // credit: http://stackoverflow.com/questions/28357971/lodash-challenges-i-have-an-array-of-objects-i-need-to-filter-for-an-array-of
        const list = this.props.gridData.get("data"); 

        console.warn("BulkPage selectedIds :", selectedIds);

        const remaining = list.toJSON().filter( obj => { return selectedIds.indexOf( obj._id ) > -1; })
        const removed = list.toJSON().filter( obj => { return selectedIds.indexOf( obj._id ) === -1; })

        this.props.bulkDisplay({removed, remaining})  
        
    }; 

    handleSelectChange(e) {
        console.log("BulkPager handleSelectChange"); 
        e.preventDefault(); 
        const newPageLimit = Number(e.target.value);

        const currIndex = this.props.currentPager
            && this.props.currentPager.get !== undefined
            ? this.props.currentPager.get('pageIndex')
            : 0; 

        this.setState({
            currentPageLimit: newPageLimit
        });

        Promise.all([
            this.props.getAsyncData({
                    dataSource: this.props.api,
                    stateKey: 'bulk',
                    extraParams: {
                        pageIndex: currIndex,
                        pageSize: newPageLimit,
                    }
                }),
            this.props.changePageLimit(newPageLimit)
        ])
      
    };

    handleNumberedPageButtonClick(e) {

        this.props.getAsyncData({
            dataSource: this.props.api,
            stateKey: 'bulk',
            extraParams: {
                pageIndex: parseInt(e.target.innerHTML) - 1,
                pageSize: this.state.currentPageLimit,
            }
        })

        Promise.all([
            this.props.getAsyncData({
                    dataSource: this.props.api,
                    stateKey: 'bulk',
                    extraParams: {
                        pageIndex: parseInt(e.target.innerHTML) - 1,
                        pageSize: this.state.currentPageLimit,
                    }
                }),
            this.props.changePageLimit(newPageLimit)
        ]);
   
    };


    render(){

        const total = this.props.gridData ?
            this.props.gridData.total
            : 0;

        const currIndex = this.props.currentPager
            && this.props.currentPager.get !== undefined
            ? this.props.currentPager.get('pageIndex')
            : 0;

        
        const totalButtons = total / this.props.bulkSelection.pageSize;
        const buttons = [];     

        _.times(totalButtons, i => { 
            buttons.push(
                <button
                    children={i+1}
                    onClick={this.handleNumberedPageButtonClick}
                    key={"btn"+i}
                    className={
                        i === currIndex
                            ? 'react-redux-grid-active'
                            : 'react-redux-grid-inactive'
                    }
                />
            );
        });

        return (
            <div style={{textAlign: 'right'}}>
                Rows per Page:&nbsp;&nbsp;
                <select onChange={this.handleSelectChange}>
                    <option key="0" value="10">10</option>
                    <option key="1" value="20">20</option>
                    <option key="2" value="50">50</option>
                    <option key="3" value="100">100</option>
                </select>
                { buttons }
                 <button className="react-redux-grid-active" onClick={this.handleBulkActionClick}>Bulk Action</button> 
            </div>
        );
    }
};

const { string, object } = PropTypes;

BulkPager.propTypes = {
    pagingDataSource: string,
    store: object.isRequired
};

BulkPager.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({
  grid: state.grid,
  selection: state.selection,
  currentPager: state.pager.get('bulk'),
  gridData: state.dataSource.get('bulk'),
  bulkSelection: state.bulkSelection
});

const mapDispatchToProps = dispatch => {
  return {
    getAsyncData: config => {
      dispatch(Actions.GridActions.getAsyncData(config))
    },
    setPageIndexAsync: config => {
         dispatch(Actions.PagerActions.setPageIndexAsync(config))
    },
    bulkDisplay: newData => {
      dispatch(BulkSelectionActions.bulkDisplay(newData))
    },
    changePageLimit: newPageLimit => {
      dispatch(BulkSelectionActions.changePageLimit(newPageLimit))
    },
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BulkPager);