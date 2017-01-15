import React, { Component } from 'react';
import Header from './components/header/Header';
import Instructions from './components/instructions/Instructions';
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
          <ExamplesSidebar />
          <div className="tableContainer">
            {this.props.children}
          </div>
          <FeaturesSidebar />
        </div>
        <Instructions />
        <Footer />
      </div>
    );
  }
}

export default App;
