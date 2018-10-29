import React from 'react';
import HeaderContainer from './header/HeaderContainer.jsx';
import MainContainer from './main/MainContainer.jsx';
import FooterBlock from './footer/FooterBlock.jsx';

class Container extends React.Component {
    render() {
        return (
            <div className = "container">
                <HeaderContainer headerContainer={this.props.data.headerContainer} />
                <MainContainer mainContainer={this.props.data.mainContainer} />
                <FooterBlock footerBlock={this.props.data.footerBlock} />
            </div>
        )
    }
}

export default Container;
