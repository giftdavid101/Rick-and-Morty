import React from 'react';
import {useHistory} from "react-router-dom";
import './seasonscard.style.css'
const SeasonsCard = ({children,id,characters}) => {
    const history = useHistory()


    let loopedCharacters =   Array.from(characters).map((el,id) => (
        <img key={id}
             src={el.replace("character", "character/avatar") + ".jpeg"} style={{width: 180, height: 170 }}  alt={""}/>
    ))

    const handleClick = (e) => {
        // history.push("/episodes/episode-characters",{ characters, id})
        console.log(e.target.value)
    }

    // const dataa = (loopedCharacters)
    // console.log(loopedCharacters.length)
    let randomEmages = Math.floor(Math.random() * loopedCharacters.length ) + 1



    return (
        <div className={"seasons-card"} key={id}>

            <div  onClick={handleClick}>
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

export default SeasonsCard;