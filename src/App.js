import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard';
import Followers from './Components/FollowersList';
import './App.css';

export default class extends React.Component {
    state = {
      users: [],
      
      
          
    }
    componentDidMount() {

      axios.get(`https://api.github.com/users/mzstevens69`)
        .then(response => {
          console.log(response.data)
          this.setState({
            users: response.data
          })
        })    
        .catch(error => {
          console.log('You got nothing-----Try Again!', error)
        })
    }

    
    render() {


        return (
          <div className='container' >
            <div className='header'>
              <img src='./lambdalogo.png' alt='Lamda Logo'/>
              <p>❤️'s</p>
              <img src="./githublogo.png" alt="GitHub Logo" />
            </div>
             <div className='card'>
              <UserCard users={this.state.users}/>
              </div>
              <div>
                <Followers />
                </div> 
                             
           
          
        

          </div>
        )
      }             
}
