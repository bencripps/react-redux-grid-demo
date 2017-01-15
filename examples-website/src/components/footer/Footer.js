import React, { Component } from 'react';
import './Footer.css';
import shoji from './gridGrey.svg';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
           <div className="shojiContainer">
             <img src={shoji} className="shoji" alt="shoji" />
           </div>
           <div className="source">
            <p><a href="https://github.com/bencripps/react-redux-grid" target="_blank">Get the Library</a></p>
          </div>
           <div className="source">
            <p><a href="https://github.com/bencripps/react-redux-grid-demo" target="_blank">Get the Examples</a></p>
          </div>
          <div className="shojiContainer">
           <img src={shoji} className="shoji" alt="shoji" />
          </div>
        </div>
    );
  }
}

export default Footer;