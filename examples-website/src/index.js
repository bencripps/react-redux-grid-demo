import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './App'; 
import AllFeatures from './components/examples/all-features/AllFeatures'; 
import Simple from './components/examples/simple/SimpleGridContainer'; 
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store) 

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Simple}/>
        <Route path="/all-features" component={AllFeatures} />
        <Route path="/simple" component={Simple} />
      </Route>
    </Router>
   </Provider>,
  document.getElementById('root')
);