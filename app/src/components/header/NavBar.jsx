import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends React.Component {
    render() {
        return (
            <Nav className= "d-flex justify-content-center">
                {this.props.navbar.items.map((item) => <NavItem key={item.link + item.name}><NavLink className= "text-muted" href={item.link}>{item.name}</NavLink></NavItem>)}
            </Nav>
        )
    }
}

export default NavBar;