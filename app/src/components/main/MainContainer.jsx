import React from 'react';
import AsideBlock from './AsideBlock.jsx';
import MainBlock from './MainBlock.jsx';
import { Row,Col } from 'reactstrap';

class MainContainer extends React.Component {
    render() {
        return (
            <Row className="mainContainer d-flex justify-content-center">
                <h3 className= "m-2 mainContainer__title">{this.props.mainContainer.title}</h3>
                <Row className="mainContainer__row"> 
                    <Col xs="9" className = "mainBlock">
                        <MainBlock mainBlock={this.props.mainContainer.mainBlock}/>
                    </Col>
                    <Col xs="3" className= "asideBlock d-flex justify-content-end">
                        <AsideBlock asideBlock={this.props.mainContainer.asideBlock} />
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default MainContainer;
