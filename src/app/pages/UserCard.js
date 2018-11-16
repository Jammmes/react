import React from 'react';
import axios from 'axios';
import UserFullCard from '../components/UserFullCard';


export default class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
      .then((response) => {this.setState({ user: response.data })});
  }

  render() {
    return (
      <div>
        {(this.state.user) && <UserFullCard user={this.state.user} />}
      </div >
    )
  }

}