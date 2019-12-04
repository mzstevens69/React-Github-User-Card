import React from 'react';

const FollowersCard = (props) => {
    console.log(props)
    return(
        <div>
            <img src={props.image} alt='user'/>
            <h2>Name: {props.name} </h2>
            
        </div>
    )
}

export default FollowersCard;