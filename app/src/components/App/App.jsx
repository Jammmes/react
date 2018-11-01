import React from 'react';
import ImgCatalog from '../ImgCatalog/ImgCatalog.jsx';
import './App.less';

class App extends React.Component {
  render() {
    return ( 
    <div className = "App" >
        <ImgCatalog imageList={this.props.imageList} title="Developers list" />
    </div>
    );
  }
}

export default App;