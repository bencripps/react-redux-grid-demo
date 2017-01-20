import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App'; 
import ExampleGrid from './components/examples/ExampleGridContainer'; 
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import './index.css';

const history = syncHistoryWithStore(browserHistory, store) 

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ExampleGrid}/>
      </Route>
    </Router>
   </Provider>,
  document.getElementById('root')
);