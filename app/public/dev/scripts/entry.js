import ReactDOM from 'react-dom';
import Provider from './src/provider.js';

const render = (id) => {
    ReactDOM.render(Provider, document.querySelector(id));
};

document.addEventListener('DOMContentLoaded', render.bind(this, '#react-grid-demo'));