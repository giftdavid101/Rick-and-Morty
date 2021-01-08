import React from 'react';

import {Route, Switch} from "react-router-dom";
import Characters from "../pages/Characters";
import SingleCharacter from "../components/compounds/singleCharacter";

const CharactersRoutes = props => {
    return (
        <Switch>
            <Route exact path={"/characters/single-characters"} component={SingleCharacter}/>
            <Route exact path={"/characters"} component={Characters}/>
        </Switch>
    );
};



export default CharactersRoutes;