import React from 'react';
import ImgCatalog from '../ImgCatalog/ImgCatalog.jsx';
import './App.less';

class App extends React.Component {
  constructor(props){
    super(props);
    let count = 0;
    let left = 0;
    let top = 0;
    let initData = this.props.initData.map((item) => (
      { ...item, count, left, top})
    )
    this.state = {imageList : initData}
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onIncrease(id,count) {
    const imageList = this.state.imageList.map((item) =>
    (item.id !== id) ? item : {...item, "count" : count}
    )
    this.setState({imageList});
  }

  onDecrease(event,id,count) {
    event.preventDefault();
    const imageList = this.state.imageList.map((item) =>
      (item.id !== id) ? item : { ...item, "count": count}
    )
    this.setState({ imageList });
  }

  render() {
    return ( 
    <div className = "App" >
        <ImgCatalog imageList={this.state.imageList}
          title="Developers list"
          onIncrease = {this.onIncrease}
          onDecrease = {this.onDecrease} />
    </div>
    );
  }
}

export default App;