import React from 'react';
import CardPost from './CardPost.jsx'
import { Row } from 'reactstrap';

class CardBlock extends React.Component {
    render() {
        return (
            <Row className = "cardBlock">
                {this.props.cardBlock.cards.map((card) => <CardPost key={card.id} cardPost = {card}/>)}
            </Row>
        )
    }
}

export default CardBlock;