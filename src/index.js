/**
 * Index
 * -----
 * This is the entry file for the application, only setup and boilerplate code.
 */

// Import all the third party stuff -------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';

// Import CSS reset and Global Styles -----------------------------------------
import 'sanitize.css/sanitize.css';
import './global-styles';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
