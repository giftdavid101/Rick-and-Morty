import React from 'react';

const LocationCharacters = (props) => {
    const {location:{state:{residents:loopedCharacters,id}}} = props

    let loopCharacters = Array.from(loopedCharacters).map((el,id) => (
        <img key={id}
             src={el.replace("character", "character/avatar") + ".jpeg"} style={{width: 150, height: 150}}  alt={""}/>
    ))
    return (
        <div>

            {loopCharacters}
        </div>
    );
};

export default LocationCharacters;