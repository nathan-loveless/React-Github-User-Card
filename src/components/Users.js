import React, {Component} from 'react';
import UserCard from './UserCard';
import axios from 'axios';

class User extends Component {
    constructor() {
      super();
      this.state = {
        user: [],
        followers: []
      };
    }
  
    // componentDidMount() {


    //   fetch("https://api.github.com/users/nathan-loveless")
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({user: res});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    //   fetch("https://api.github.com/users/nathan-loveless/followers")
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({followers: res});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    //     console.log(this.state.user);

    // }

    componentDidMount() {
      axios.all([
        axios.get('https://api.github.com/users/nathan-loveless'),
        axios.get('https://api.github.com/users/nathan-loveless/followers')
      ])
        .then(response => {
          this.setState({user: response[0].data, followers: response[1].data});
          console.log(response[1]);
        })
        .catch(error => {
          console.log('axios:', error);
        })
    }

    render() {
      return (
        <div>
          <UserCard user={this.state.user} followers={this.state.followers} />
        </div>
      );
    }
  }
  
  export default User;