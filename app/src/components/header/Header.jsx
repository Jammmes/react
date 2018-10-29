import React from 'react';
import { Button } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';


class Header extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={4}></Col>
                <Col xs={4}>
                    <h1> {this.props.header.title} </h1>
                </Col>
                <Col xs={4} className= "d-flex justify-content-end align-items-center">
                    <Button href ="#">Sign Up</Button>
                </Col>
                <hr className="my-2" />
            </Row>
        )
    }
}

export default Header;