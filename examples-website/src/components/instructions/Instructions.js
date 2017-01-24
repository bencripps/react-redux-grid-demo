import React, { Component } from 'react';
import './Instructions.css';

class Instructions extends Component {
  render() {
    return (
        <div className="instructionsContainer">
         <div className="instructions">
            <p>
            Whether you're building a Highscore table or an Enterprise user admin, <a href="https://github.com/bencripps/react-redux-grid" target="_blank">React-Data-Grid</a> will give you a highly configurable library that can draw tabular data. You can begin by installing:
            </p> 
            <p><span className="purpleHilite">npm install react-redux-grid --save</span></p>
            <p>Then, this site will help you configure your desired table. All the examples are available to download from a separate <a href="https://github.com/bencripps/react-redux-grid-demo" target="_blank">Examples Github</a> where you can also contribute your own custom grid examples. 
            </p>
          </div>
        </div>  
    );
  }
}

export default Instructions;