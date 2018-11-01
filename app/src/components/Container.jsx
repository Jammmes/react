import React from 'react';
import HeaderContainer from './header/HeaderContainer.jsx';
import MainContainer from './main/MainContainer.jsx';
import FooterBlock from './footer/FooterBlock.jsx';

class Container extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className = "container">
                <HeaderContainer headerContainer={data.headerContainer} />
                <MainContainer mainContainer={data.mainContainer} />
                <FooterBlock footerBlock={data.footerBlock} />
            </div>
        )
    }
}

export default Container;
