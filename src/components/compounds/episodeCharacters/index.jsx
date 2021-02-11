import React from 'react';
import './episodecharacters.style.css'

const EpisodeCharacters = (props) => {
const {location: {state:{characters:loopedCharacters,id}}} = props


    let emageWidth = 180
    let emageHeight = 180
    console.log(props)

    let loopCharacters = Array.from(loopedCharacters).map((el,id) => (
        <img key={id}
             src={el.replace("character", "character/avatar") + ".jpeg"} style={{width: emageWidth, height: emageHeight}}  alt={""}/>
    ))


    return (
        <div className={'Ec'} key={id}>
            {loopCharacters}
        </div>
    );

};

export default EpisodeCharacters;