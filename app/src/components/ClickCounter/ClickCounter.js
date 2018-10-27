import React from 'react'
import './ClickCounter.css';

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

    onDecrease() {
        let newCount = this.state.count - 1;
        this.setState({ count: (newCount < 0) ? 0 : newCount });
    }

    render() {
        return (
            <div className="clickCounter">
                <button className="clickCounter__button" onClick={this.onIncrease}>+</button>
                <button className="clickCounter__button" onClick={this.onDecrease}>-</button>
                <div className="clickCounter__count">{this.state.count}</div>
            </div>
        )
    }
}

export default ClickCounter;