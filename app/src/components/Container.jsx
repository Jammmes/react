import React from 'react';
import HeaderBlock from './header/HeaderBlock.jsx';
//import MainBlock from './main/MainBlock.jsx';
//import FooterBlock from './footer/FooterBlock.jsx';

class Container extends React.Component {
    render() {
        return (
            <div className = "container">
                <HeaderBlock headerBlock={this.props.data.headerBlock} />
            </div>
        )
    }
}

export default Container;

/*
    <MainBlock data = {this.props.data.mainBlock} />
    <FooterBlock data = {this.props.data.footerBlock} />
*/