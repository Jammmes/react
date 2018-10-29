import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardLink, CardImg } from 'reactstrap';

class CardPost extends React.Component {
    render() {
        return (
            <Row className="cardpost">
                <Card className="mb-4 shadow-sm">
                    <Row>
                        <Col>
                            <CardBody>
                                <CardTitle className={"text-" + this.props.cardPost.topicColor}>{this.props.cardPost.topic}</CardTitle>
                                <h3>{this.props.cardPost.title}</h3>
                                    <CardText>
                                        <small className="text-muted">Date: {this.props.cardPost.date}</small>
                                    </CardText>
                                <CardText>{this.props.cardPost.cardText}</CardText>
                                <CardLink href={this.props.cardPost.cardLink.link}>{this.props.cardPost.cardLink.name}</CardLink>
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