/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Actions } from 'react-redux-grid';
import { connect } from 'react-redux';
import BulkPager from './BulkPager'; 
import store from '../../../redux/configureStore';
import Api from './..//data/Api';

import {
    columns,
    events,
    plugins,
} from '../data/demodata';

class BulkSelection extends Component {

    constructor(props){
        super(props);

        console.log("BulkSelection constructor: ", props);

        const pagerConfig = {
            pageSize: this.props.bulkSelection.pageSize
        }

    };

    componentWillReceiveProps(nextProps, nextState) {
        this.props = nextProps;
    };

    componentDidMount() {

    };

    componentDidUpdate() {
        console.log("BulkSelection componentDidUpdate this.props: ", this.props);
         
    };

    render(){
        console.log("BulkSelection render this.props: ", this.props);

        let pagerConfig = {
            data: this.props.bulkSelection.data,
            pageSize: this.props.bulkSelection.pageSize
        }

        let config = {
                columns,
                dataSource: Api,
                pageSize: pagerConfig.pageSize,
                plugins: {
                    ...plugins,
                    STICKY_HEADER: {
                        enabled: true
                    },
                    STICKY_FOOTER: {
                        enabled: true
                    },
                    FILTER_CONTAINER: {
                        enabled: true
                    },

                    PAGER: {
                        enabled: true,
                        pagingType: 'remote',
                        pagerComponent: (
                            <BulkPager
                                api={Api}
                                store={store}
                            />
                        )
                    },
                    BULK_ACTIONS: {
                        enabled: true,
                        actions: [
                            {
                                text: 'Move',
                                EVENT_HANDLER: () => {

                                }
                            },
                            {
                                text: 'Add',
                                EVENT_HANDLER: () => {

                                }
                            }
                        ]
                    },
                    GRID_ACTIONS: {
                        iconCls: 'action-icon',
                        menu: [
                            {
                                text: 'Delete',
                                EVENT_HANDLER: ({ metaData }) => {
                                    const rowIndex = metaData.rowIndex;

                                    store.dispatch(
                                        Actions.EditorActions.removeRow({
                                            stateKey,
                                            rowIndex
                                        })
                                    );
                                }
                            }
                        ]
                    }
                },
                height: '',
                events,
                store,
                stateKey: 'bulk' 
            }


        return (
            <Grid { ...config } />
            );
    };
}



const mapStateToProps = (state, ownProps) => ({
  grid: state.grid,
  bulkSelection: state.bulkSelection,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BulkSelection);