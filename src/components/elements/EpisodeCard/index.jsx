import React from 'react';
import './episodecard.style.css'
import {useHistory} from 'react-router-dom'


const EpisodeCard = ({children, id, characters}) => {

    const history = useHistory()

    let loopedCharacters = Array.from(characters).map((el, id) => (
        <div>
            <img key={id}
             src={el.replace("character", "character/avatar") + ".jpeg"} style={{width: 250, height: 308}} alt={""}/>
        </div>
    ))

    const handleClick = () => {
        history.push("/episodes/episode-characters", {characters, id})
    }


    const randomEmages = Math.floor(Math.random() * loopedCharacters.length ) + 1


    return (
        <div className={'ep-card'} key={id}>
            <div onClick={handleClick}>
                <div>
                    {loopedCharacters[randomEmages]}
                </div>

            </div>
            <div style={{position: 'absolute',
                background:' #4a544e',
                bottom: '15px'}}>
                {children}

            </div>
        </div>
    );
};

export default EpisodeCard;