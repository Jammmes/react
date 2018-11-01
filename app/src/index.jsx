import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import imageList from './assets/imageList';
import App from './components/App/App.jsx';

ReactDOM.render( <App imageList = {imageList}/> , document.getElementById('root'));