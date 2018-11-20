import React from 'react';
import { Link } from 'react-router';

export default class UserFullCard extends React.Component
{
    render()
    {
        const {user} = this.props;
        const {address, company} = user;

        return (<div className="panel panel-default">
            <div className="panel-heading">
                <h3>{user.username}</h3>
                <Link to = "users" className="text-muted">
                    Показать всех пользователей
                </Link>
            </div>
            <div className="panel-body">
                <h4>Main info:</h4>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.website}</p>
                <p>{user.phone}</p>
                <h4>Address:</h4>
                <p>{address.street}</p>
                <p>{address.suite}</p>
                <p>{address.city}</p>
                <p>{address.zipcode}</p>
                <h4>Company:</h4>
                <p>{company.name}</p>
                <p>{company.catchPhrase}</p>
                <p>{company.bs}</p>
            </div>
        </div>);
    }
}
