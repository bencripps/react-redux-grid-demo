/* eslint-disable */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events,
    dataSource,
    pagingDataSource
} from './..//data/demodata';

export const Pager = ({ api, current, gridData, pagingDataSource, store  }) => {
    
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
        store.dispatch(
            Actions.PagerActions
                .setPageIndexAsync({
                    pageIndex: parseInt(index) - 1,
                    pageSize: 10,
                    dataSource: api,
                    stateKey: 'custom-pager'
                })
        );
    };

    for (let i = 0; i < total / 10; i++) {
        buttons.push(
            <button
                children={i+1}
                onClick={onClick}
                key={"custom-pager"+i}
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
            { buttons }
        </div>
    );
};

const { string, object } = PropTypes;

Pager.propTypes = {
    pagingDataSource: string,
    store: object.isRequired
};

Pager.defaultProps = {};

export default connect((state, props) => ({
    gridData: state.dataSource.get('custom-pager'),
    current: state.pager.get('custom-pager'),
}))(Pager);