import React, {useEffect, useState} from 'react';
import './App.css';
// import Footer from "./components/compounds/Footer";
import Characters from "./pages/Characters";
import Axios from "axios";
// import {Button} from "antd";
// import SingleCharacter from "./components/compounds/singleCharacter";
// // eslint-disable-next-line
import {Route, Switch} from "react-router-dom";
import EpisodeSection from "./components/compounds/Episode-section-two";
import SideBar from "./components/compounds/SideBar";
import SearchIcon from "./components/elements/SeachIcon";
import CSLSectionOne from "./components/compounds/CSLsection-one";
import DeadCharacters from "./components/compounds/DeadCharacters-section-three";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";

import {withRouter} from 'react-router-dom';
import CharactersRoutes from "./Routers/charactersroutes";


function App() {
    const [characters, setCharacters] = useState([])
    const [locations,setLocations] = useState([])
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [clickSearchIcon, setClickSearchIcon] = useState(false);
    const searchCharacters = (a) => {
        setInput(a);
    }

    // const mainURL = process.env.REACT_APP_BASE_URL
    //
    // /**
    //  * Takes page number
    //  * @param {string} link - page link
    //  */
    // // const requestCharacters = (link = `${mainURL}/character`) => {
    // //     console.log({link})
    // //     setLoading(true)
    // //     Axios.get(link)
    // //         .then((response) => {
    // //             setLoading(false)
    // //             const {data, status} = response
    // //             if (status === 200) {
    // //                 setCharacters(data.results);
    // //                 setPagination(data.info)
    // //             }
    // //         })
    // //         .catch((err) => {
    // //             // setLoading(false)
    // //             console.log(err)
    // //         });
    // // }
    //
    // /**
    //  * Navigates pages
    //  * @param {'next' | 'prev'} action - takes 'next' or 'prev' actions
    //  */
    // const navigation = (action) => {
    //     switch (action) {
    //         case "next":
    //             pagination.next && requestCharacters(pagination.next)
    //             break;
    //         case "prev":
    //             pagination.prev && requestCharacters(pagination.prev)
    //             break;
    //         default:
    //             return
    //     }
    //
    // }
    //
    // useEffect(() => {
    //     requestCharacters();
    //     // eslint-disable-next-line
    // }, []);

    return (
        <div className="App container">

            <div><SideBar/></div>

            <div className={'character-content container'}>
                <div>
                    <div>
                        <SearchIcon searchCharacters={searchCharacters} clickSearchIcon={clickSearchIcon} setClickSearchIcon={setClickSearchIcon}/>
                    </div>
                </div>
                <Switch>
                    <Route  path={"/characters"} component={CharactersRoutes}/>
                    <Route exact path={'/episodes'} component={Episodes}/>
                    <Route exact path={'/locations'} component={Locations}/>
                    <Route exact path={'/'}>
                        <CSLSectionOne  characters={characters} setCharacters={setCharacters} input={input} setInput={setInput}/>
                        <EpisodeSection  />
                        <DeadCharacters/>
                    </Route>

                </Switch>

            </div>
        </div>
    );
}

export default App;
