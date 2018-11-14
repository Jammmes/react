import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import Posts from './app/pages/Posts';
import Comments from './app/pages/Comments';



const app = document.getElementById('app');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main} />
            <Route path="users" component={Users} />
            <Route path="posts" component={Posts} />
            <Route path="comments" component={Comments} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>,
app);