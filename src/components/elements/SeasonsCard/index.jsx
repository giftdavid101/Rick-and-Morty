import React from 'react';
import './seasonscard.style.css';


const SeasonsCard = ({children,id,characters}) => {
    let loopedCharacters =   Array.from(characters).map((el,id) => (
        <img key={id}
             src={el.replace("character", "character/avatar") + ".jpeg"} style={{width: 180, height: 170 }}  alt={""}/>
    ))

    const handleClick = (e) => {
        console.log(e.target.value)
    }


    let randomEmages = Math.floor(Math.random() * loopedCharacters.length ) + 1



    return (
        <div className={"seasons-card"} key={id}>

            <div  onClick={handleClick}>

                {loopedCharacters[randomEmages]}
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default SeasonsCard;