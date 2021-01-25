import React from 'react';
// eslint-disable-next-line
import {Route, Switch} from "react-router-dom";
import Characters from "../../pages/Characters";
import SingleCharacter from "../../components/compounds/singleCharacter";

const CharactersRoutes = ({filtered}) => {
    return (
        <Switch>
            <Route exact path={"/characters/single-characters"} component={SingleCharacter}/>
            {/*<Route   component={Characters}/>*/}
            <Route exact path={"/characters"}>
           <Characters filtered={filtered} />
            </Route>
        </Switch>
    );
};



export default CharactersRoutes;