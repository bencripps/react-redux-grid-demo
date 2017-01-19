import React, { Component } from 'react';
import reactLogo from './react.svg';
import reduxLogo from './redux.svg';
import gridLogo from './grid.svg';
import githubLogo from './github-square.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
          <img src={reactLogo} className="react-logo" alt="react logo" />
          <img src={reduxLogo} className="redux-logo" alt="redux logo" />
          <img src={gridLogo} className="grid-logo" alt="grid logo" />
          <div className="title">
            <h1><span className="purpleHilite">React Redux Grid</span></h1>
            <h3>A Flexible Grid Pattern Library for Tabular Data</h3>
          </div>
          <a href="https://github.com/bencripps/react-redux-grid-demo" target="_blank">
            <img src={githubLogo} className="github-logo" alt="grid logo" />
          </a>
        </div>        
    );
  }
}

export default Header;