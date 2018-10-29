import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardLink, CardImg } from 'reactstrap';

class CardBlock extends React.Component {
    render() {
        return (
            <Row className= "d-flex justify-content-center">
            {this.props.cardBlock.cards.map((card) => (
                    <Card key={card.id} className= "mb-4 shadow-sm"> 
                    <Row>
                        <Col >
                            <CardBody>
                                <CardTitle className = {"text-"+card.topicColor}>{card.topic}</CardTitle>
                                <CardTitle>
                                        <h3>{card.title}</h3>
                                </CardTitle>
                                    <CardText>
                                        <small className="text-muted">Date: {card.date}</small>
                                    </CardText>
                                <CardText>{card.cardText}</CardText>
                                    <CardLink href={card.cardLink.link}>{card.cardLink.name}</CardLink>
                            </CardBody>
                        </Col>
                        <Col >
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        </Col>
                    </Row>
                </Card>)
                )}
            </Row>
        )
    }
}

export default CardBlock;