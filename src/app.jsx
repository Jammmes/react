import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import UserCard from './app/pages/UserCard';
import Posts from './app/pages/Posts';
import PostCard from './app/pages/PostCard';
import Comments from './app/pages/Comments';

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main} />
            <Route path="users" component={Users}>
                <Route path = ":userId" component = {UserCard} />
            </Route> 
            <Route path="posts" component={Posts}>
                <Route path = ":postId" component = {PostCard}/>
            </Route>
            <Route path="comments" component={Comments} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>,
app);