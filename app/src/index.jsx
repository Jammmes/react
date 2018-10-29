import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App.jsx';
import blogData from './assets/blogData.js';

render (<App data = {blogData} />, document.getElementById('app'));