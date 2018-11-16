import React from 'react';
import PostFullCard from '../components/PostFullCard';
import axios from 'axios';


export default class PostCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      post: null,
      user: null
    }

      axios.all([
          axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.params.postId),
          axios.get("https://jsonplaceholder.typicode.com/comments")
      ])
          .then(axios.spread((postResponse, commentResponse) => {
              axios.get("https://jsonplaceholder.typicode.com/users/" + postResponse.data.userId)
              .then(userResponse => {this.setState({
                      post: postResponse.data,
                      user: userResponse.data,
                    comments: commentResponse.data.filter((item) => +item.postId === +this.props.params.postId)
                  });
              });
          }));
  }

  render() {
    const {post, user,comments} = this.state;

    if (!post || !user || !comments) {return null};
    return ( 
       <PostFullCard comments = {comments} user = {user} post = {post}/>
     );
  }
}