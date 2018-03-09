import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

console.log('Hi there, fellow developer! Thanks for checking under the hood.')

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
