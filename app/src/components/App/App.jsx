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
    this.setState({ imageList });
  }

  onDecrease(event,id,count) {
    event.preventDefault();
    const imageList = this.state.imageList.map((item) =>
      (item.id !== id) ? item : { ...item, "count": count}
    )
    this.setState({ imageList });
  }

  render() {
    const imageList = this.state.imageList;
    const sortFunction = (a, b) => (a.count > b.count) ? -1 : 1;
    const sortedList = [...imageList].sort(sortFunction); 
    return ( 
    <div className = "App" >
        <ImgCatalog imageList = {sortedList}
          title = "React application - Image list"
          onIncrease = {this.onIncrease}
          onDecrease = {this.onDecrease} />
    </div>
    );
  }
}

export default App;