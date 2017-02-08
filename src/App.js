import React, { Component } from 'react';
import Header from './components/header/Header';
import ExamplesSidebar from './components/sidebar/ExamplesSidebar';
import FeaturesSidebar from './components/sidebar/FeaturesSidebar';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />        
        <div className="split">
          <div className="sidebarsContainer">
            <FeaturesSidebar store={this.props.store} />
            <ExamplesSidebar store={this.props.store} />
          </div>
          <div className="tableContainer">
            {this.props.children}
          </div>
          
        </div>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    document.title = 'React-Redux-Grid';
  }
}

export default App;
