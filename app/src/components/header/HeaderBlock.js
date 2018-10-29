import React from 'react';
import Header from './header/Header';
import NavBar from './header/NavBar';
import Hero from './header/Hero';
import CardBlock from './header/CardBlock';


class HeaderBlock extends React.Component {
    render() {
        return (
            <div className="headerBlock">
                <Header data = {this.props.data.Header}/>
                <NavBar data = {this.props.data.NavBar} />
                <Hero data = {this.props.data.Hero} />
                <CardBlock data = {this.props.data.CardBlock} />
            </div>
        )
    }
}

export default HeaderBlock;