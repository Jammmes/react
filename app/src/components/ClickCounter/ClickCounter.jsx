import React from 'react'
import './ClickCounter.less';

/**
 * 
 * 
 */
class ClickCounter extends React.Component {
    render() {
        const {id,count,onIncrease,onDecrease} = this.props;
        return (
            <div className="clickCounter">
                {/* <div className="clickCounter__count" onClick={onIncrease(id, count + 1)} onContextMenu = {onDecrease (env,id, count - 1)}>{count}</div> */}
            </div>
        )
    }
}

// const ClickCounter = ({id,onIncrease,onDecrease,count}) =>

//     <div className="clickCounter">
//         <div className="clickCounter__count" onClick={()=> onIncrease(id,count + 1)} onContextMenu={()=>onDecrease(id,count - 1)}>{count}</div>
//     </div>


export default ClickCounter;