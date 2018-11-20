import React from 'react';

export default class CommentLight extends React.Component
{
    render()
    {
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h5>{this.props.name}</h5>
                <div className="text-muted">E-mail:{this.props.email}</div>
                <div className="text-muted">{`comment id: ${this.props.id}`}</div>
            </div>
            <div className="panel-body">
                <p>{this.props.body}</p>
            </div>
        </div>);
    }
}