import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App'; 
import ExampleGrid from './components/examples/ExampleGridContainer'; 
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './index.css';

const history = syncHistoryWithStore(browserHistory, store) 

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ExampleGrid}/>
        <Route path="/Simple" component={ExampleGrid} />
        <Route path="/Complex" component={ExampleGrid} />
        <Route path="/Stress" component={ExampleGrid} />
        <Route path="/Sticky" component={ExampleGrid} />
        <Route path="/Editable" component={ExampleGrid} />
        <Route path="/ColRenderer" component={ExampleGrid} />
        <Route path="/Tree" component={ExampleGrid} />
        <Route path="/Bootstrap" component={ExampleGrid} />
        <Route path="/CustomPager" component={ExampleGrid} />
      </Route>
    </Router>
   </Provider>,
  document.getElementById('root')
);