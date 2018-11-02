import React from 'react';
import { Row, Button } from 'reactstrap';

class MainPangination extends React.Component {
    render() {
        return (
            <Row className="mainPangination d-flex justify-content-center">
                <Button className = "m-1" outline color="secondary">Older</Button>
                <Button className = "m-1" outline color="secondary" disabled>Newer</Button>
            </Row>
        )
    }
}

export default MainPangination;