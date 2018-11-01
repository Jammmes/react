import React from 'react';
import { Row, Col, Button } from 'reactstrap';

class MainPangination extends React.Component {
    render() {
        return (
            <Row className="mainPangination d-flex justify-content-center">
            <Col>
                <Button className = "m-1" outline color="secondary">Older</Button>
                <Button className = "m-1" outline color="secondary" disabled>Newer</Button>
            </Col>
                <Col>
                    <Button outline color="success">Create a new post</Button>
                </Col>
            </Row>
        )
    }
}

export default MainPangination;