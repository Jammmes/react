import React from 'react';
import Counter from '../components/Counter/Counter.jsx';
import './AddCounter.less';

function AddCounter(Component){

    return class extends React.Component{

        render(){
            const {onIncrease,onDecrease,item} = this.props;
            return (
                <div className = "addCounter"> 
                    <Component  {...this.props} />
                    <Counter onIncrease={onIncrease}
                        onDecrease={onDecrease}
                        count={item.count}
                        id={item.id} />
                </div>
            )
        }
    }
}

export default AddCounter;