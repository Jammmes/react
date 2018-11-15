import React from 'react';

export default class UserFullCard extends React.Component
{
    render()
    {
        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3>{this.props.username}</h3>
            </div>
            <div className="panel-body">
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.website}</p>
                <p>{this.props.phone}</p>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Addresss:</h3>
                </div>
                <div className="panel-body">
                    <p>{this.props.address.street}</p>
                    <p>{this.props.address.suite}</p>
                    <p>{this.props.address.city}</p>
                    <p>{this.props.address.zipcode}</p>
                </div>
            </div>
        </div>);
    }
}

/*
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
*/