import React from 'react';
import { Nav, NavItem} from 'reactstrap';
class FooterBlock extends React.Component {
    render() {
        return (
            <Nav className="footerBlock p-4 text-light bg-dark d-flex justify-content-center">
                <NavItem>{this.props.footerBlock.title}</NavItem>
            </Nav>
        )
    }
}

export default FooterBlock;