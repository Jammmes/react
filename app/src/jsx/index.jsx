import React from 'react';
import {render} from 'react-dom';
import DevInfoComponent from '../components/DevInfoComponent.jsx';


class App extends React.Component{
    render(){
        return( 
        <div>
        <p> Hello React !!! </p>
        <DevInfoComponent />
        </div>
        )
    }
}

render (<App/>, document.getElementById('app'));