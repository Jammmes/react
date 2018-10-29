import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import blogData from './assets/blogData.js';

render (<App data = {blogData} />, document.getElementById('app'));