import React from 'react';

const Card = ({id, name, email, street}) =>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
            <img alt ='robots' src ={`https://robohash.org/${id}?200x200`}>
            </img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{street}</p>
            </div>
        </div>
    );
}

export default Card;