import React from 'react';
import './Counter.less';
class Counter extends React.Component{

    render(){
        const {onIncrease, onDecrease , count, id} = this.props
        return (
            <div className="counter" onClick={() => { onIncrease(id, count + 1) }}
                onContextMenu={() => onDecrease(event, id, ((count - 1) < 0) ? 0 : count - 1)}>
            <div className="counter__caption">{count}</div>
        </div>
        )
    }
}

export default Counter;