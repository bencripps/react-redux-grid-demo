import React, { Component } from 'react';
import shoji from './gridGrey.svg';
import Instructions from '../instructions/Instructions';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <div className="shojiContainer">
            <img src={shoji} className="shoji" alt="shoji" />
          </div>
          <Instructions /> 
          <div className="shojiContainer">
           <img src={shoji} className="shoji" alt="shoji" />
          </div>
        </div>
    );
  }
}

export default Footer;