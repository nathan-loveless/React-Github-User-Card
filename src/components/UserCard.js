import React, {Component} from 'react';
import styled from 'styled-components';

const ImageHeader = styled.div.attrs({
  className: 'image-header'
})`
    width: 40%;
    background: brown;
    margin-left: 50px;
    margin-bottom: 0px;
    padding-bottom: 0px;
`;

const NameHeader = styled.div.attrs({
  className: 'name-header'
})`
    width: 40%;
    background: lightgrey;
    margin-left: 50px;
    font-weight: bold;
    font-size: 24px;
`;

const LineHeaders = styled.div.attrs({
  className: 'line-items'
})`
    width: 40%;
    background: lightblue;
    margin-left: 50px;
    display: flex;
    
`;

const LineItemsHeader = styled.div.attrs({
  className: 'line-items'
})`
    width: 20%;
    background: lightblue;
    margin-left: 50px;
    font-weight: bold;
    justify-content: flex-start;
`;

const FollowImage = styled.div.attrs({
  className: 'title'
})`
  max-width: 10%;
`;

const ImgTag = styled.img`
  width: 100%;
  object-fit: contain;
  margin-right: 50px;
  padding-right: 10px;
`;

const FollowerItem = styled.div.attrs({
  className: 'follower-item'
})`
display: flex;
  width: 40%;
  font-weight: bold;
  font-size: 20px;
  justify-content: flex-start;
  padding-top: 15px;
  margin-left: 15px;
`;

class UserCard extends Component {
    state = {
        user: [],
        followers: []
    }
    // constructor() {
    //   super();
    //   this.state = {
    //     user: this.props.user,
    //     followers: this.props.followers
    //   };
    // }

    componentDidMount() {
        this.setState({ user: this.props.user, followers: this.props.followers})
    }

    render() {
      return (
        
        <div>
          
          <><ImageHeader className='image-header'>
            <img src={this.props.user.avatar_url}></img>
        </ImageHeader></>
        <NameHeader>{this.props.user.name}</NameHeader>
          <LineHeaders>
              <LineItemsHeader>Username</LineItemsHeader>
              <div>{this.props.user.login}</div>
          </LineHeaders>
          <LineHeaders>
              <LineItemsHeader>Location</LineItemsHeader>
              <div>{this.props.user.location}</div>
          </LineHeaders>
          <LineHeaders>
              <LineItemsHeader>Repositories</LineItemsHeader>
              <div>{this.props.user.repos_url}</div>
          </LineHeaders>
          <LineHeaders>
              <LineItemsHeader>Followers</LineItemsHeader>
              <div>{this.props.user.followers}</div>
          </LineHeaders>
          <NameHeader>Followers</NameHeader>

          {this.props.followers.map(follower => (
            <LineHeaders>
            <><FollowImage className='image-header'>
            <ImgTag src={follower.avatar_url}></ImgTag>
        </FollowImage></>
            <FollowerItem className='follower-item'>{follower.login}</FollowerItem>
        </LineHeaders>
          ))}
        </div>
      );
    }
  }
  
  export default UserCard;