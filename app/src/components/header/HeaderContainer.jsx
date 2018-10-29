import React from 'react';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import Hero from './Hero.jsx';


class HeaderContainer extends React.Component {
    render() {
        return (
            <div className="headerContainer">
                <Header header = {this.props.headerContainer.header} />
                <NavBar navbar = {this.props.headerContainer.navBar} />
                <Hero hero = {this.props.headerContainer.hero}  />
            </div>
        )
    }
}

export default HeaderContainer;