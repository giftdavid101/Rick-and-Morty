import React, {useState} from 'react';
import './episodecard.style.css'
import { useHistory } from 'react-router-dom'
import EpisodeCharacters from "../../compounds/episodeCharacters";

const EpisodeCard = ({children,id,characters}) => {
    const history = useHistory()


    let loopedCharacters =   Array.from(characters).map((el,id) => (
        <img key={id}
             src={el.replace("character", "character/avatar") + ".jpeg"} style={{width: 250, height: 250 }}  alt={""}/>
    ))

    const handleClick = () => {
     history.push("/episodes/episode-characters",{ characters, id})
    }

    console.log(characters)
    // const dataa = (loopedCharacters)
    // console.log(loopedCharacters.length)
    let randomEmages = Math.floor(Math.random() * loopedCharacters.length ) + 1



    return (
        <div className={'ep-card'} key={id}>
            <div onClick={handleClick}>
                {/*{*/}
                {/*    Array.from(characters).map((el,id) => (*/}
                {/*        <img key={id}*/}
                {/*             src={el.replace("character", "character/avatar") + ".jpeg"} style={{width: emagewidth }}  alt={""}/>*/}
                {/*    ))*/}
                {/*}*/}
                {loopedCharacters[randomEmages]}
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default EpisodeCard;