import React from 'react';
import './ImgCard.less';
import AddCounter from '../../hoc/AddCounter.jsx'


/* 
 * Component ImgCard
 * @props - object has 'id','img' parameters
 *   
 * */
class ImgCard extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <div className="imgCard">
                <img className="imgCard__img" src={'img/' + item.img} alt = "..."/>
            </div>
        );
    }
}

export default AddCounter(ImgCard);