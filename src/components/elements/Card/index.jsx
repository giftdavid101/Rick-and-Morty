import React, {useState} from 'react';
import './card.style.css'

const Card = ({children, image, handleClick}) => {

    return (
        <div className="card">
            <div  className="card-img" onClick={(e) => {
                console.log("clicked");
                handleClick(e)
                }
            }>
                <img alt="photo" src={image}/>
            </div>
            <div className={"card-meta"}>
                {children}
            </div>
        </div>
    );
};

export default Card;