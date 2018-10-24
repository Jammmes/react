import React from 'react';
import {render} from 'react-dom';
import DevInfoComponent from '../components/DevInfoComponent.jsx';
import devList from '../modules/devlist.js';




class App extends React.Component{

    render(){
        return( 
        <div>
            <p> Hello React !!! </p>
            {this.props.devlist.map((item) => <DevInfoComponent key = {item.id} dev = {item} />
            )}
        </div>
        )
    }
}

render (<App devlist = {devList}/>, document.getElementById('app'));