import React from 'react';
import "./Posters.css"


const Posters = (props) =>{
    return (
        <div className='carts'>
            <img src={props.image} className='poster'/>
            <p className='name'>{props.name}</p>
            <p className='year'>Year: {props.year}</p>
        </div>
    )
};

export default Posters;