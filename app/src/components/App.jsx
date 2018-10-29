import React from 'react';
import Container from './Container.jsx';

class App extends React.Component {
  render() {
    return (
      <Container data = {this.props.data.root}/>
    )
  }
}

export default App;