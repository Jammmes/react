import React from 'react';
import AsideArchive from './AsideArchive.jsx';


class AsideBlock extends React.Component {
    render() {
        return (
            <div>
                <AsideArchive asideArchive ={this.props.asideBlock.asideArchive} />
                <AsideArchive asideArchive={this.props.asideBlock.asideArchive} />
                <AsideArchive asideArchive={this.props.asideBlock.asideArchive} />
            </div>
        )
    }
}

export default AsideBlock;