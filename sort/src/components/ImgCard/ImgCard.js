import React from 'react';
import './ImgCard.css';
import ClickCounter from '../ClickCounter/ClickCounter'; 
/* 
 * Component ImgCard, use internal Component ClickCounter 
 * @props - object has 'id','img' parameters  
 * */
class ImgCard extends React.Component {
    render() {
        return (
            <div className="ImgCard">
                <img className="ImgCard__img" src = {'../img/' + this.props.items.img} alt = "..."/>
                <div className="ImgCard__count">
                    <ClickCounter />
                </div>
            </div>
        );
    }
}

export default ImgCard;