import React from 'react';
import './episodecharacters.style.css'

const EpisodeCharacters = (props) => {
const {location: {state:{characters:loopedCharacters,id}}} = props

    // console.log(location)
    let emageWidth = 180
    let emageHeight = 180
    console.log(props)
    // console.log(props.characters)
    // console.log({loopedCharacters})
    // console.log({characters})

    // const {id, loopedCharacters} = props
    let loopCharacters = Array.from(loopedCharacters).map((el,id) => (
        <img key={id}
             src={el.replace("character", "character/avatar") + ".jpeg"} style={{width: emageWidth, height: emageHeight}}  alt={""}/>
    ))


    return (
        <div className={'Ec'} key={id}>

            {/*{*/}
            {/*    Array.from(characters).map((el, id) => (*/}
            {/*    <img key={id}*/}
            {/*         src={el.replace("character", "character/avatar")} style={{width: emagewidth}} alt={""}/>*/}
            {/*))*/}
            {/*}*/}

            {/*{*/}
            {/*    console.log(character)*/}
            {/*}*/}
            {loopCharacters}

        </div>
    );

};

export default EpisodeCharacters;