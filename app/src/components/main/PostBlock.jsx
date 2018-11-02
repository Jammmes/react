import React from 'react';
import PostCard from './PostCard.jsx'
import { Row, Alert,Button } from 'reactstrap';

class PostBlock extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            posts: this.props.postBlock.posts,
            showAddForm: false
        };

        this.onRemovePost = this.onRemovePost.bind(this);
        this.onAddPost = this.onAddPost.bind(this);
        this.onSavePost = this.onSavePost.bind(this);
    }

    onRemovePost(id){
        this.setState({
            posts: this.state.posts.filter(item => item.id !== id)
        });    
    }

    onAddPost(){
        this.setState({
            showAddForm: !this.state.showAddForm
        });
    }

    onSavePost(newPost) {
        let newPosts = [...this.state.posts];
        newPosts.push(newPost);
        this.setState({
            posts: newPosts,
            showAddForm: false
        });
    }

    render() {
        let addForm = (this.state.showAddForm)?
            <form className="border m-2 p-1" id="add_post_form">
                <div className="form-group">
                    <label htmlFor="topic">Topic</label>
                    <input type="text" className="form-control" id="topic" placeholder="Write post topic here ..." />
                </div>
                <div className="form-group">
                    <label htmlFor="topic_color">Topic color</label>
                    <select name="topic_color" id="topic_color">
                        <option>success</option>
                        <option>primary</option>
                        <option>secondary</option>
                        <option>info</option>
                        <option>warning</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Write post title here ..." />
                </div>
                <div className="form-group">
                    <label htmlFor="card_text">Card_text</label>
                    <textarea className="form-control" id="card_text" rows="10" />
                </div>
                <div className="form-group">
                    <label htmlFor="main_text">Main text</label>
                    <textarea className="form-control" id="main_text" rows="10" />
                </div>
                <button type="submit" className="btn btn-primary">Create post</button>
            </form>
         : "";  

        return (
            <div>
                <div className = "m-auto" >
                    <Button outline color="success" onClick={this.onAddPost}>Create a new post</Button>
                </div>
                <div >
                    {addForm}
                </div>
                <Row className="cardBlock">
                    <div className="m-2">
                        {(this.state.posts.length > 0) ?
                            (this.state.posts.map((post) => <PostCard key={post.id}
                                postCard={post}
                                onRemovePost={this.onRemovePost} />)
                            ) : <Alert color="success">
                                <h1 className="display-1 text-center">Sorry. There is no post, but you can create it.</h1>
                            </Alert>}
                    </div>
                </Row>
            </div>
        )
    }

    componentDidMount(){
        const that = this;
        const addForm = document.getElementById('add_post_form');

        if (addForm){
            addForm.onsubmit = function (event) {
                event.preventDefault();

                let topic = document.getElementById('topic').value;
                let topic_color = document.getElementById('topic_color').value;
                let title = document.getElementById('title').value;
                let card_text = document.getElementById('card_text').value;
                let main_text = document.getElementById('main_text').value;

                //соберем объект для вставки поста
                let newPost = {
                    "id": Math.floor(Math.random() * (10000 - 0.1 + 1)),
                    "topic": topic,
                    "topicColor": topic_color,
                    "title": title,
                    "date": new Date().toDateString(),
                    "cardText": card_text,
                    "img": "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180",
                    "collapseCaption": "continue reading ...",
                    "mainText": main_text
                }
                  that.onSavePost(newPost);
                return false;
            };
        }
    }
}

export default PostBlock;