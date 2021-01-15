import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import EpisodeSection from "./components/compounds/Episode-section-two";
import SideBar from "./components/compounds/SideBar";
import SearchIcon from "./components/elements/SeachIcon";
import CSLSectionOne from "./components/compounds/CSLsection-one";
import DeadCharacters from "./components/compounds/DeadCharacters-section-three";
import Locations from "./pages/Locations";
import CharactersRoutes from "./Routers/CharactersRoute/charactersroutes";
import EpisodeRoutes from "./Routers/EpisodeRoutes";
import LocationsRoutes from "./Routers/LocationsRoute";
import NotFound from "./pages/ErrorPages/notfound";


function App() {

    return (

        <div className="App container">

            <div><SideBar/></div>

            <div className={'character-content container'}>
                <div>
                    <div>
                        <SearchIcon />
                    </div>
                </div>

                <Switch>
                    <Route path={"/characters"} component={CharactersRoutes}/>
                    <Route  path={"/episodes"} component={EpisodeRoutes}/>
                    <Route  path={"/locations"} component={LocationsRoutes}/>
                    <Route exact path={'/'}>
                        <CSLSectionOne/>
                        <EpisodeSection  />
                        <DeadCharacters/>
                    </Route>
                    <Route path={'*'} component={NotFound}/>
                </Switch>

            </div>

        </div>

    );
}

export default App;
