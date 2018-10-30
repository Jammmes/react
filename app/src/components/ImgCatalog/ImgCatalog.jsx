import React from 'react';
import './ImgCatalog.css';
import ImgCard from '../ImgCard/ImgCard.jsx';

/**
 * Component for image list
 * use ImgCard component for render each item
 * sort items by ImgCard state.ClickCounter
 * @props - object array 'items', contains 'id', 'img' parameters
 */
class ImgCatalog extends React.Component {
    constructor(props){
        super(props);


    }


    render() {
        return (
            <div className="ImgCatalog">
                <h1 className="ImgCatalog__title">{this.props.title}</h1>
                <hr />
                <div className="ImgCatalog__list">
                    {this.props.imageList.map((item) => <ImgCard key = {item.id} item = {item} />
                    )}
                </div>
            </div>
        )
    }
}

export default ImgCatalog;