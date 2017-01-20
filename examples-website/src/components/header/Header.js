import React, { Component } from 'react';
import reactLogo from './react.svg';
import reduxLogo from './redux.svg';
import reactReduxGridLogo from './reactReduxGrid.svg';
import githubLogo from './github-square.svg';
import './Header.css';
import pattern from './tiny_grid/tiny_grid.png';

class Header extends Component {
  render() {

    const tweet = "https://img.shields.io/twitter/url/https/github.com/bencripps/react-redux-grid.svg?style=social"
    const stars = "https://img.shields.io/github/stars/bencripps/react-redux-grid.svg";
    //const npm = "http://img.shields.io/npm/react-redux-grid/localeval.svg";
    //const coverage = "https://img.shields.io/codecov/coverage/github/codecov/example-python.svg";
    //const download = "https://img.shields.io/github/downloads/atom/atom/total.svg";
    const license = "https://img.shields.io/badge/license-MIT-blue.svg";

    // http://meyerweb.com/eric/tools/dencoder/
    const encodedTweetMessage = "Need%20a%20table%20for%20your%20React%20Redux%20project%3F%20check%20out%20React-Redux-Grid%20on%20github%20https%3A%2F%2Fgithub.com%2Fbencripps%2Freact-redux-grid";
    const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodedTweetMessage;

    const headerStyle = {backgroundImage: `url(${pattern})`};

    return (
        <div className="header" style={headerStyle}>
           <a href="https://facebook.github.io/react/" target="_blank" alt="react website"><img src={reactLogo} className="react-logo" alt="react logo" /></a>
           <a href="http://redux.js.org/" target="_blank" alt="redux website"><img src={reduxLogo} className="redux-logo" alt="redux logo" /></a>
           <a href="https://github.com/bencripps/react-redux-grid" target="_blank" alt="react-redux-grid github"><img src={reactReduxGridLogo} className="grid-logo" alt="grid logo" /></a>
          <div className="title">
            <h1><span className="purpleHilite">React Redux Grid</span></h1>
            <h3>A Flexible Grid Pattern Library for Tabular Data</h3>
          </div>
          <div className="listContainer">
           <img src={stars} alt="github stars" />
           <img src={license} alt="license" />
           <a className="twitter-share-button" 
             href={tweetUrl}>
             <img src={tweet} alt="tweet" />
           </a>
          </div>
          <a href="https://github.com/bencripps/react-redux-grid-demo" target="_blank">
            <img src={githubLogo} className="github-logo" alt="grid logo" />
          </a>
        </div>        
    );
  }
}

export default Header;