import React from 'react';


const UserCard = props => 
  
        <div>
            <img src={props.users.avatar_url} alt={props.users.name}/>
                <h1>{props.users.name}</h1>
                <div> {props.users.username} </div>
                <h3> {props.users.location} </h3>
                <div> {props.users.link} </div>
                <div>Followers: {props.users.followers} </div>
                <div>Following: {props.users.following} </div>
                <div>{props.users.bio} </div>

        </div>

export default UserCard;
    
