import React from 'react';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import Hero from './Hero.jsx';
import CardBlock from './CardBlock.jsx';


class HeaderBlock extends React.Component {
    
    render() {
        return (
            <div className="headerBlock">
                <Header header = {this.props.headerBlock.header} />
                <NavBar navbar = {this.props.headerBlock.navBar} />
                <Hero hero = {this.props.headerBlock.hero}  />
                <CardBlock cardBlock={this.props.headerBlock.cardBlock} />
            </div>
        )
    }
}

export default HeaderBlock;