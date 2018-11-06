import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component
{
    render()
    {
        return (<li className={this.props.active ? 'active nav-item m-2' : 'nav-item m-2'}>
                <Link to={this.props.href}>{this.props.children}</Link>
        </li>);
    }
}