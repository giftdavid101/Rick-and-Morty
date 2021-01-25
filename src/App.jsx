import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import EpisodeSection from "./components/compounds/Episode-section-two";
import SideBar from "./components/compounds/SideBar";
import SearchIcon from "./components/elements/SeachIcon";
import CSLSectionOne from "./components/compounds/CSLsection-one";
import DeadCharacters from "./components/compounds/DeadCharacters-section-three";
import CharactersRoutes from "./Routers/CharactersRoute/charactersroutes";
import EpisodeRoutes from "./Routers/EpisodeRoutes";
import LocationsRoutes from "./Routers/LocationsRoute";
import NotFound from "./pages/ErrorPages/notfound";


function App() {
    const [filtered, setFiltered] = useState('')
    const [input, setInput] = useState('');
    const [characters, setCharacters] = useState([])
    const [clickSearchIcon, setClickSearchIcon] = useState(false);

    const searchCharacters = (a) => {
        setInput(a);
        console.log(a)
    }
    const handleChange = (e) => setFiltered(e.target.value);
    console.log(filtered)
    // useEffect(() => {
    //     if (!input) {
    //         setCharacters(characters)
    //     } else {
    //         const filteredCharacters = characters.filter(el => el.name.trim().toLowerCase().includes(input.trim().toLowerCase()))
    //         setFiltered(filteredCharacters)
    //     }
    //
    //     //eslint-disable-next-line
    // }, [input])
    return (

        <div className="App container">

            <div><SideBar/></div>

            <div className={'character-content container'}>
                <div>
                    <div>
                        <SearchIcon setClickSearchIcon={setClickSearchIcon} clickSearchIcon={clickSearchIcon}
                                    setInput={handleChange} filtered={filtered} searchCharacters={searchCharacters}/>
                    </div>
                </div>


                <Switch>

                    <Route path={"/characters"}>
                        <CharactersRoutes filtered={filtered} setFiltered={setFiltered}/>
                    </Route>
                    {/*<Route path={"/characters"}  component={CharactersRoutes}/>*/}
                    <Route path={"/episodes"}>
                        <EpisodeRoutes filtered={filtered} setFiltered={setFiltered}/>
                    </Route>
                    <Route path={"/locations"}>
                        <LocationsRoutes filtered={filtered} setFiltered={setFiltered}/>
                    </Route>

                    {/*<Route   component={EpisodeRoutes}/>*/}
                    {/*<Route  path={"/locations"} component={LocationsRoutes}/>*/}
                    <Route exact path={'/'}>
                        <CSLSectionOne input={input}/>
                        <EpisodeSection/>
                        <DeadCharacters/>
                    </Route>
                    <Route path={'*'} component={NotFound}/>
                </Switch>

            </div>

        </div>

    );
}

export default App;
