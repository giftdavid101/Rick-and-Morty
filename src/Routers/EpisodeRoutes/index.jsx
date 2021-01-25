import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Episodes from "../../pages/Episodes";
import EpisodeCharacters from "../../components/compounds/episodeCharacters";

const EpisodeRoutes = ({props, filtered}) => {

    return (
        <div>
            <Switch>
                {/*<Route exact path={'/episodes'} component={Episodes}/>*/}

                <Route exact path={'/episodes/episode-characters'} component={EpisodeCharacters}/>
                <Route>
                    <Episodes filtered={filtered}/>
                </Route>
            </Switch>
        </div>
    );
};

export default EpisodeRoutes;