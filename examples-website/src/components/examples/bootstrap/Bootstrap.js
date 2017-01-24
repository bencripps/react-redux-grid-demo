/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Grid, Actions, applyGridConfig } from 'react-redux-grid';
import './css/bootstrap.min.css';

import {
    columns,
    data,
    pageSize,
    events,
    plugins,
    dataSource
} from '../data/demodata';

export class Bootstrap extends Component {

    componentWillUnmount() {
        applyGridConfig({
            CLASS_NAMES: {
                ACTIVE_CLASS: 'active',
                INACTIVE_CLASS: 'inactive',
                DRAG_HANDLE: 'drag-handle',
                SORT_HANDLE: 'sort-handle',
                SECONDARY_CLASS: 'secondary',
                CONTAINER: 'container',
                TABLE: 'table',
                TABLE_CONTAINER: 'table-container',
                HEADER: 'header',
                THEADER: 't-head',
                HEADER_HIDDEN: 'header-hidden',
                HEADER_FIXED: 'header-fixed',
                HEADER_FIXED_CONTAINER: 'header-fixed-container',
                HEADER_STUCK: 'header-stuck',
                HEADER_STUCK_BOTTOM: 'header-stuck-bottom',
                ROW: 'row',
                ROW_IS_DRAGGING: 'row-is-dragging',
                CELL: 'cell',
                CELL_TREE_ARROW: 'cell-tree-arrow',
                CELL_HANDNLE_CONTAINER: 'cell-handle-container',
                ROW_DRAG_HANDLE: 'row-drag-handle',
                PAGERTOOLBAR: 'pager-toolbar',
                EMPTY_ROW: 'empty-row',
                EDITED_CELL: 'edit',
                LOADING_BAR: 'loading-bar',
                DRAGGABLE_COLUMN: 'draggable-column',
                COLUMN: 'column',
                SORT_HANDLE_VISIBLE: 'sort-handle-visible',
                BUTTONS: {
                    PAGER: 'page-buttons'
                },
                SELECTION_MODEL: {
                    CHECKBOX: 'checkbox',
                    CHECKBOX_CONTAINER: 'checkbox-container'
                },
                ERROR_HANDLER: {
                    CONTAINER: 'error-container',
                    MESSAGE: 'error-message'
                },
                EDITOR: {
                    INLINE: {
                        CONTAINER: 'inline-editor',
                        SHOWN: 'shown',
                        HIDDEN: 'hidden',
                        SAVE_BUTTON: 'save-button',
                        CANCEL_BUTTON: 'cancel-button',
                        BUTTON_CONTAINER: 'button-container',
                        INPUT_WRAPPER: 'editor-wrapper'
                    }
                },
                GRID_ACTIONS: {
                    CONTAINER: 'action-container',
                    SELECTED_CLASS: 'action-menu-selected',
                    NO_ACTIONS: 'no-actions',
                    DISABLED: 'disabled',
                    ICON: 'action-icon',
                    MENU: {
                        CONTAINER: 'action-menu-container',
                        ITEM: 'action-menu-item'
                    }
                },
                FILTER_CONTAINER: {
                    CONTAINER: 'filter-container',
                    INPUT: 'filter-input',
                    SEARCH_BUTTON: 'filter-search-button',
                    MENU_BUTTON: 'filter-menu-button',
                    CLEAR_BUTTON: 'filter-clear-button',
                    BUTTON_CONTAINER: 'filter-button-container',
                    MENU: {
                        CONTAINER: 'advanced-filter-menu-container',
                        TITLE: 'advanced-filter-menu-title',
                        BUTTON: 'advanced-filter-menu-button',
                        BUTTON_CONTAINER: 'advanced-filter-menu-button-container',
                        FIELD: {
                            CONTAINER: 'advanced-filter-menu-field-container',
                            LABEL: 'advanced-filter-menu-field-label',
                            INPUT: 'advanced-filter-menu-field-input'
                        }
                    }
                },
                BULK_ACTIONS: {
                    CONTAINER: 'bulkaction-container',
                    DESCRIPTION: 'bulkaction-description',
                    SHOWN: 'shown',
                    HIDDEN: 'hidden'
                }
            },
            CSS_PREFIX: 'react-grid'
        });
    }

    render() {
        const { store } = this.props;
        const stateKey = 'bootstrap';

        applyGridConfig({
            CLASS_NAMES: {
                TABLE: 'table table-striped',
                TABLE_CONTAINER: 'table-responsive',
                HEADER_FIXED_CONTAINER: 'header-fixed',
                HEADER: 'header-bs',
                HEADER_HIDDEN: 'hidden-override',
                ROW: 'row-bs',
                CELL: 'text-left',
                COLUMN: 'column-bs',
                PAGERTOOLBAR: 'text-right bootstrap-description',
                BUTTONS: {
                    PAGER: 'btn pull-left negative-margin'
                },
                ERROR_HANDLER: {
                    CONTAINER: 'hidden'
                }
            },
            CSS_PREFIX: ''
        });

        const bootstrapData = {
            columns: [
                {
                    name: 'Name',
                    width: '10%',
                    className: 'additional-class',
                    dataIndex: 'Name',
                    sortable: true,
                    HANDLE_CLICK: () => { console.log('Header Click'); }
                },
                {
                    name: 'Phone Number',
                    width: '20%',
                    dataIndex: 'Phone Number',
                    sortable: true,
                    className: 'additional-class'
                },
                {
                    name: 'Email',
                    width: '25%',
                    dataIndex: 'Email',
                    sortable: true,
                    className: 'additional-class',
                    defaultSortDirection: 'descend'
                },
                {
                    name: 'Address',
                    dataIndex: 'Address',
                    sortable: true,
                    width: '35%',
                    className: 'additional-class'
                }
            ],
            data,
            pageSize,
            plugins: {
                ...plugins,
                BULK_ACTIONS: {
                    enabled: false
                },
                GRID_ACTIONS: {
                    menu: []
                }
            },
            events,
            dataSource,
            store,
            stateKey
        };

        return <Grid { ...bootstrapData } />;
    }

}

const { object } = PropTypes;

Bootstrap.propTypes = {
    store: object.isRequired
};

Bootstrap.defaultProps = {};

export default Bootstrap;