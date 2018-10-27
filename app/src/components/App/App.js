import React from 'react';
import ImgList from '../ImgList/ImgList';
import './App.css';
import imageList from '../../assets/imageList';

class App extends React.Component {
  render() {
    return ( 
    <div className = "App" >
        <ImgList items={imageList} title="Developers list" />
    </div>
    );
  }
}

export default App;