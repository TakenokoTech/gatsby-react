import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/Root';

// REDIRECT
if(location.pathname.split('/').length > 2) window.location.href = "http://" + location.hostname;

// RENDER
ReactDOM.render(<Root />, document.getElementById('root'));
