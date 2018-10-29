import React from 'react';
import {render} from 'react-dom';
import DevListComponent from './components/DevListComponent.jsx';
import devList from './modules/devlist.js';

class App extends React.Component{
    render(){
        return <DevListComponent devlist={devList} title = "Список разработчиков"/>
    }
}

render (<App/>, document.getElementById('app'));