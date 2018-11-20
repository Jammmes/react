import React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/postsAction';
import PostsList from '../components/Posts/PostsList';

class Posts extends React.Component {
  render() {
      if (this.props.is_loading){
        <div> Данные загружаются...</div>
      }
      console.log(this.props);
    return (
      (!this.props.children)?
      <PostsList posts = {this.props.posts}/> : this.props.children
    );
  }

  componentDidMount(){
    this.props.dispatch(getPost());
  }

}

// Указываем, что мы забираем из стора/редюсера
function mapStateToProps(store) {
  return {
    posts: store.posts.posts,
    is_loading: store.posts.is_loading
  }
}

// Для того, чтобы стор попадал в пропсы компонента
export default connect(mapStateToProps)(Posts);