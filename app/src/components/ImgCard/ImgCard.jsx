import React from 'react';
import './ImgCard.less';
import ClickCounter from '../ClickCounter/ClickCounter.jsx'; 

/* 
 * Component ImgCard, use internal Component ClickCounter 
 * @props - object has 'id','img' parameters
 *   
 * */
class ImgCard extends React.Component {
    render() {
       // console.log(this.props.onIncrease);
        return (
            <div className="ImgCard">
                <img className="ImgCard__img" src={'img/' + this.props.item.img} alt = "..."/>
                <div className="ImgCard__count">
                    <ClickCounter onIncrease={this.props.onIncrease}
                        onDecrease={this.props.onDecrease} 
                        count = {this.props.item.count}
                        id={this.props.item.id}/>
                </div>
            </div>
        );
    }
}

export default ImgCard;