import React from 'react';
import './ImgList.css';
import ImgCard from '../ImgCard/ImgCard';

/**
 * Component for image list
 * use ImgCard component for render each item
 * sort items by ImgCard state.ClickCounter
 * @props - object array 'items', contains 'id', 'img' parameters
 */
class ImgList extends React.Component {
    render() {
        return (
            <div className="ImgList">
                <h1 className="ImgList__title">{this.props.title}</h1>
                <div className="ImgList__list">
                    {this.props.items.map((item) => <ImgCard key = {item.id} img = {item} />
                    )}
                </div>
            </div>
        )
    }
}

export default ImgList;