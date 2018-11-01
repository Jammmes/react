import React from 'react';
import './ImgCard.less';


/* 
 * Component ImgCard
 * @props - object has 'id','img' parameters
 *   
 * */
class ImgCard extends React.Component {
    render() {
        const {onIncrease,onDecrease,item} = this.props;
        return (
            <div className="imgCard" onClick = {() => {onIncrease(item.id, item.count + 1)}}
                onContextMenu={() => onDecrease(event, item.id, ((item.count - 1) < 0) ? 0 : item.count - 1)}>
                <img className="imgCard__img" src={'img/' + this.props.item.img} alt = "..."/>
                <div className="imgCard__count">
                    <div className = "clickCounter">{this.props.item.count}</div>
                </div>
            </div>
        );
    }
}

export default ImgCard;