import React from 'react';
import {render} from 'react-dom';
import DevInfoComponent from '../components/DevInfoComponent.jsx';
import devList from '../modules/devlist.js';




class App extends React.Component{

    render(){
        return( 
        <div>
        <DevInfoComponent />
        <p> Hello React !!! </p>
                {devList.forEach((item) => <div><p>{item.name}</p></div>
            )}
        </div>
        )
    }
}

render (<App/>, document.getElementById('app'));