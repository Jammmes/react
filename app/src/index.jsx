import React from 'react';
import ReactDOM from 'react-dom';
import initData from './assets/initData';
import App from './components/App/App.jsx';

ReactDOM.render( <App initData = {initData}/> , document.getElementById('root'));