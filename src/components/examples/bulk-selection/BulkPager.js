/* eslint-disable */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-redux-grid';
import * as BulkSelectionActions from '../../../redux/actions/bulkSelectionActions';

import {
    columns,
    data,
    pageSize,
    events,
    dataSource,
    pagingDataSource
} from './..//data/demodata';

export const BulkPager = ({ api, 
                            current, 
                            gridData, 
                            pagingDataSource, 
                            store, 
                            bulkSelection, 
                            selection, 
                            changePageLimit, 
                            setPageIndexAsync,
                            bulkDisplay  }) => {

    const getSelectedIds = ()=> {

       const bulkMap = selection.get("bulk");
       const selectedIds = bulkMap.get("indexes");

       if (undefined !== selectedIds) {
           return selectedIds; 
        } else {
            // you could dispatch a notification... 
            // this.props.displayWarningRequestMessage("No rows selected");
            console.warn("BulkPage selectedIds were false! no rows selected");
            return [];
        }  
    };

    const handleBulkActionClick = (e) => {
        e.preventDefault(); 
        const selectedIds = getSelectedIds();

        const currentPageRecords = gridData.get("data").toJSON(); 
        
        // credit: http://stackoverflow.com/questions/28357971/lodash-challenges-i-have-an-array-of-objects-i-need-to-filter-for-an-array-of
        const list = gridData.get("data"); 

        const remaining = list.toJSON().filter( obj => { return selectedIds.indexOf( obj._id ) > -1; })
        const removed = list.toJSON().filter( obj => { return selectedIds.indexOf( obj._id ) === -1; })

        bulkDisplay({removed, remaining})  
        
    }; 

    const handleSelectChange = (e) => {
        e.preventDefault(); 
        const newPageLimit = Number(e.target.value);

        const currIndex = current
            && current.get !== undefined
            ? current.get('pageIndex')
            : 0; 
        
        Promise.all([
            setPageIndexAsync({
                    pageIndex: currIndex,
                    pageSize: newPageLimit,
                    dataSource: api,
                    stateKey: 'bulk'
                }),
            changePageLimit(newPageLimit)
        ])
    };

    const total = gridData ?
        gridData.total
        : 0;

    const currIndex = current
        && current.get !== undefined
        ? current.get('pageIndex')
        : 0;

    const buttons = [];

    const onClick = (e) => {
        const index = e.target.innerHTML
        
        setPageIndexAsync({
            pageIndex: parseInt(index) - 1,
            pageSize: bulkSelection.pageSize,
            dataSource: api,
            stateKey: 'bulk'
        })

    };

    for (let i = 0; i < total / bulkSelection.pageSize; i++) {
        buttons.push(
            <button
                children={i+1}
                onClick={onClick}
                key={"btn"+i}
                className={
                    i === currIndex
                        ? 'react-redux-grid-active'
                        : 'react-redux-grid-inactive'
                }
            />
        );
    }

    return (
        <div style={{textAlign: 'right'}}>
            Rows per Page:&nbsp;&nbsp;
            <select onChange={handleSelectChange}>
                <option key="0" value="20">20</option>
                <option key="2" value="50">50</option>
                <option key="3" value="100">100</option>
            </select>
            { buttons }
             <button className="react-redux-grid-active" onClick={handleBulkActionClick}>Bulk Action</button> 
        </div>
    );
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
  current: state.pager.get('bulk'),
  gridData: state.dataSource.get('bulk'),
  bulkSelection: state.bulkSelection
});

const mapDispatchToProps = dispatch => {
  return {
    setPageIndexAsync: config => {
      dispatch(Actions.PagerActions.setPageIndexAsync(config))
    },
    refresh: (data, stateKey, editMode) => {
      dispatch(Actions.GridActions.setData(data, stateKey, editMode))
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