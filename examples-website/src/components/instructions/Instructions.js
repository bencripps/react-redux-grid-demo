import React, { Component } from 'react';
import './Instructions.css';

class Instructions extends Component {
  render() {
    return (
        <div className="instructionsContainer">
         <div className="instructions">
            <p>
            Whether you're building a Highscore table or an Enterprise user admin, you will want to start your project with a highly configurable library that can draw tabular data. 
            This library, <a href="https://github.com/bencripps/react-redux-grid" target="_blank">react-data-grid</a>, aims to be your first choice.   
            </p> 
            <code>npm install react-redux-grid --save</code>
            <p>This site will help you configure your desired table. All the examples are available to download from a separate 
            <a href="https://github.com/bencripps/react-redux-grid-demo" target="_blank">Examples Github</a> where you can also contribute your own custom grid examples. 
            </p>
          </div>
        </div>  
    );
  }
}

export default Instructions;