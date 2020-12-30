import React from 'react';
import {Button} from "antd";

const SingleCharacter = (props) => {
    const {location: {state: character}, history} = props;
    // const character = props.location.state;
    // const {state: character} = props.location

    console.log({props})
    return (
        <div>
            <div>
                <Button onClick={history.goBack} >Go Back</Button>
            </div>
            <div>
                Name {character.name}
                Name {character.age}
            </div>
            <img src={character.image} alt={`${character.name} character`}/>
        </div>
    );
};

export default SingleCharacter;