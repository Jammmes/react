import React from 'react';
import { Link } from 'react-router';
import CommentLight from '../comments/CommentLight';

export default class PostFullCard extends React.Component
{
    render()
    {
        const {comments,user,post} = this.props;
        const commentsBlock = comments.map((comment) => {
            return <CommentLight key = {comment.id} {...comment} />
        })
        return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h2>{`Пост # ${post.id}`}</h2>
                <h3>{post.title}</h3>
                { <Link className="text-muted" to = {`/users/${user.id}`}>
                        {`Показать автора поста (Ид автора: ${user.id})`}
                </Link> }
            </div>
            <div className="panel-body">
                <p>{post.body}</p>
            </div>
        <div>
            <h3>Все комментарии к этому посту:</h3>
            {commentsBlock}
        </div>

    
        </div>);
    }
}