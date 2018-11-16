import React from 'react';
import { Link } from 'react-router';

export default class Comment extends React.Component
{
    render()
    {
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3>{this.props.name}</h3>
                <Link className="text-muted" to={`/posts/${ this.props.postId }`}>
                    Показать пост
                </Link>
                <h5 className="text-muted">E-mail:{this.props.email}</h5>
            </div>
            <div className="panel-body">
                <p>{`comment id: ${this.props.id}`}</p>
                <p>{this.props.body}</p>
            </div>
        </div>);
    }
}