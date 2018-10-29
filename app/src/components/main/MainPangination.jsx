import React from 'react';
import { Row } from 'reactstrap';

class MainPangination extends React.Component {
    render() {
        return (
            <Row className="mainPangination d-flex justify-content-center">
                <a className="m-2 btn btn-outline-primary" href="#">Older</a>
                <a className="m-2 btn btn-outline-secondary disabled" href="#">Newer</a>
            </Row>
        )
    }
}

export default MainPangination;