import React from 'react';
import axios from 'axios';
import UserFullCard from '../components/UserFullCard';


export default class UserCard extends React.Component() {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    axios.get(`https://jsonplaceholder.typicode.com/users${this.props.params.userId}`)
      .then((response) => this.setstate({ user: response.data }));
  }

  render() {
    return (
        <div>
            <UserFullCard user = { this.state }/>
        </div >
    )
  }

}