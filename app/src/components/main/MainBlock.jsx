import React from 'react';
import CardBlock from './CardBlock.jsx';
import MainPangination from './MainPangination.jsx'

class MainBlock extends React.Component {
    render() {
        return (
            <div className="m-4 shadow-sm">
                <CardBlock cardBlock={this.props.mainBlock.cardBlock} />
                <MainPangination />
            </div>
        )
    }
}

export default MainBlock;
