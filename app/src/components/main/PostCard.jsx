import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';
import CollapseText from '../utils/CollapseText.jsx'

class PostCard extends React.Component {
    render() {
        const {postCard, onRemovePost} = this.props
        return (
            <Row className="postCard">
                <Card className="mb-4 shadow-sm">
                    <Row>
                        <Col>
                            <CardBody>
                                <Row>
                                    <Col>
                                        <CardTitle className={"text-" + postCard.topicColor}>{postCard.topic}</CardTitle>
                                    </Col>
                                    <Col className="d-flex justify-content-end align-items-center">
                                        <Button color="danger" size="sm" onClick = {()=>onRemovePost(postCard.id)}>Delete post</Button>
                                    </Col>
                                </Row>
                                <h3>{postCard.title}</h3>
                                    <CardText>
                                        <small className="text-muted">Date: {postCard.date}</small>
                                    </CardText>
                                <CardText>{postCard.cardText}</CardText>
                                <CollapseText caption={postCard.collapseCaption} text={postCard.mainText} />
                            </CardBody>
                        </Col>
                        <Col>
                            <CardImg top width="100%" src={postCard.img} alt="Card image cap" />
                        </Col>
                    </Row>
                </Card>
            </Row>
        )
    }
}

export default PostCard;