import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';
import CollapseText from '../utils/CollapseText.jsx'

class CardPost extends React.Component {
    render() {
        return (
            <Row className="cardpost">
                <Card className="mb-4 shadow-sm">
                    <Row>
                        <Col>
                            <CardBody>
                                <Row>
                                    <Col>
                                        <CardTitle className={"text-" + this.props.cardPost.topicColor}>{this.props.cardPost.topic}</CardTitle>
                                    </Col>
                                    <Col className="d-flex justify-content-end align-items-center">
                                        <Button color="danger" size="sm">Delete post</Button>
                                    </Col>
                                </Row>
                                <h3>{this.props.cardPost.title}</h3>
                                    <CardText>
                                        <small className="text-muted">Date: {this.props.cardPost.date}</small>
                                    </CardText>
                                <CardText>{this.props.cardPost.cardText}</CardText>
                                <CollapseText caption={this.props.cardPost.collapseCaption} text={this.props.cardPost.mainText} />
                            </CardBody>
                        </Col>
                        <Col>
                            <CardImg top width="100%" src={this.props.cardPost.img} alt="Card image cap" />
                        </Col>
                    </Row>
                </Card>
            </Row>
        )
    }
}

export default CardPost;