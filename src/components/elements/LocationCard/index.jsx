import React from 'react';
import './loccard.style.css';
import {useHistory} from 'react-router-dom';

const LocationCard = ({children,id,residents}) => {
const history = useHistory()

const handleClick = () => {
    history.push("/locations/location-characters",{ residents, id})
}
    let loopedCharacters =   Array.from(residents).map((el,id) => (
        <img key={id}
             src={el.replace("character", "character/avatar") + ".jpeg"} style={{width: 250, height: 310 }}  alt={""}/>
    ))



    return (
        <div className={'loc-card'} key={id}>
            <div onClick={handleClick}>
                {loopedCharacters}
            </div>

            <div style={{position: 'absolute',
                background:' #4a544e',
                bottom: '15px'}}>
                {children}

            </div>
        </div>
    );
};

export default LocationCard;