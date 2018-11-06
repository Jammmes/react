import React from 'react';
import {Link} from 'react-router';
import {Navbar, Container} from 'reactstrap';

export default class Menu extends React.Component
{
    render()
    {
        return (<Navbar>
            <Container>
                <Navbar>
                    <Link to="/">
                        <div>{this.props.brand}</div>
                    </Link>
                    <ul className = "nav">
                        {this.props.children}
                    </ul>
                </Navbar>
            </Container>
        </Navbar>);
    }
}