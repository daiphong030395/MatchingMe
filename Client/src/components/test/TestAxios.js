import React from 'react';

import axios from 'axios';

export default class TestAxios extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    axios.get(`http://localhost:8080//MatchingMe/user/1`)
      .then(res => {
        console.log('Response', res);
        const user = res.data;
        this.setState({ user });
        console.log('State: ', this.state.user);
      })
  }

  render() {
    return (
      <ul>
        {/* { this.state.users.map(person => <li>{person.name}</li>)} */}
      </ul>
    )
  }
}