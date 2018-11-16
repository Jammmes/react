import React from 'react';
import axios from 'axios';
import Post from "./Post";

export default class PostsList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            posts: []
        };

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.setState({posts: response.data});
            });
    }

    render()
    {
        if(!this.state.posts.length){
            return null; 
        }

        let posts = this.state.posts.map((post, index) => {
            return <Post key={index} {...post} />;
        });

        return (<div>
            <h1>Посты</h1>
            {posts}
        </div>);
    }
}