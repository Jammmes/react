import React from 'react';
import HeaderBlock from './header/HeaderBlock';
import MainBlock from './main/MainBlock';
import FooterBlock from './footer/FooterBlock';

class Container extends React.Component {
    render() {
        return (
            <div className = "container">
                <HeaderBlock data = {this.props.data.headerBlock} />
                <MainBlock data = {this.props.data.mainBlock} />
                <FooterBlock data = {this.props.data.footerBlock} />
            </div>
        )
    }
}

export default Container;