import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

export default (
    <Provider store={ store }>
        <App { ...{ store } }/>
    </Provider>
);