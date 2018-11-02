import React from 'react';
import PostBlock from './PostBlock.jsx';
import MainPangination from './MainPangination.jsx'

class MainBlock extends React.Component {
    render() {
        return (
            <div className="m-4 shadow-sm">
                <PostBlock postBlock={this.props.mainBlock.postBlock} />
                <MainPangination />
            </div>
        )
    }
}

export default MainBlock;
