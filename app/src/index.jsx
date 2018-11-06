import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import PageNotFound from './pages/PageNotFound';
import Posts from './pages/Posts';
import 'bootstrap/dist/css/bootstrap.css';




const app = document.getElementById('app');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main} />
            <Route path="posts" component={Posts} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>,
    app);