import React from 'react';
import { Link } from 'react-router';

export default class Post extends React.Component
{
    render()
    {
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3>
                <Link to = {`/posts/${this.props.id}`}>
                    {this.props.title}
                </Link>
                </h3>
                <div className="text-muted">{`ИД поста: ${this.props.id}`}</div>
                <Link className="text-muted" to = {`/users/${this.props.userId}`}>
                    {`Показать автора поста (Ид автора: ${this.props.userId})`}
                </Link>
            </div>
            <div className="panel-body">
                <p>{this.props.body}</p>
            </div>
        </div>);
    }
}