import React, { Component } from 'react';
import './App.css';
import ImgList from '../ImgList/ImgList';
import images from '../../assets/images';

class App extends Component {
  render() {
    return ( 
    <div className = "App" >
     <ImgList items = {images}/>
    </div>
    );
  }
}

export default App;