import React from 'react'
import './ClickCounter.less';

/**
 * 
 * 
 */
class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count : 0};
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    onIncrease() {
        let newCount = this.state.count + 1;
        this.setState({ count: newCount });
    }

    onDecrease(event) {
        event.preventDefault();
        let newCount = this.state.count - 1;
        this.setState({ count: (newCount < 0) ? 0 : newCount });
    }

    render() {
        return (
            <div className="clickCounter">
                <div className="clickCounter__count" onClick = {this.onIncrease} onContextMenu = {this.onDecrease}>{this.state.count}</div>
            </div>
        )
    }
}

export default ClickCounter;