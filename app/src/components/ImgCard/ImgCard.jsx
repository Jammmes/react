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
        return (
            <div className="ImgCard">
                <img className="ImgCard__img" src={'img/' + this.props.item.img} alt = "..."/>
                <div className="ImgCard__count">
                    <ClickCounter />
                </div>
            </div>
        );
    }
}

export default ImgCard;