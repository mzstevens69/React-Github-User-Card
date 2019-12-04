import React from 'react';
import axios from 'axios';
import FollowersCard from './FollowersCard'


class Followers extends React.Component {
    
    state = {
        followers: []
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/mzstevens69/followers')
        .then(response => {
          console.log(response.data)
          this.setState({
            followers: response.data
          })
        })
        .catch(error => {
          console.log('You got nothing-----Try Again!', error)
        })
    }
    
    render() { 
    return (
        <div>
            {this.state.followers.map(follower => ( 
                <FollowersCard 
                    key={follower.id}
                    image={follower.avatar_url}
                    name={follower.login}
                    location={follower.location}
                    followers={follower.follower}
                    following={follower.following}
                    bio={follower.bio}
                    />
            ))}
             
                       
         
        </div>
    )
  }
}
export default Followers;