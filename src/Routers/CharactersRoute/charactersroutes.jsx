import React from 'react';
import {Route, Switch} from "react-router-dom";
import Characters from "../../pages/Characters";
import SingleCharacter from "../../components/compounds/singleCharacter";

const CharactersRoutes = ({filtered}) => {
    return (
        <div>
            <Switch>
                <Route exact path={"/characters/single-characters"} component={SingleCharacter}/>
                <Route exact path={"/characters"}>
                    <Characters filtered={filtered}/>
                </Route>
            </Switch>
        </div>
    );
};


export default CharactersRoutes;