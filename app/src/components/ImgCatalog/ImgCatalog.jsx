import React from 'react';
import './ImgCatalog.less';
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
        let newArray = props.imageList.map((item) => (
            {"id":item.id,
            "img":item.img,
            "count":0,
            "top":0,
            "left":0
            })
        )
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