import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/compounds/Navbar";
import Footer from "./components/compounds/Footer";
import {Switch,Route} from 'react-router-dom';
import Home from "./components/compounds/home";
import Axios from "axios";

function App() {
    const [characters, setCharacters] = useState([])
    const [pagination, setPagination] = useState({});
    const [input, setInput] = useState('');
    const searchCharacters = (a) => {
        setInput(a);
    }
    // console.log(input)
    useEffect(() => {
        Axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                const {data, status} = response
                if (status === 200) {
                    setCharacters(data.results);
                    setPagination(data.info)
                }
                // console.log(data)
            })
            .catch((err) => console.log(err));

    }, []);

  return (
    <div className="App">
     <Navbar searchCharacters={searchCharacters} />
        <Home input={input} characters={characters} setCharacters={setCharacters} />
    {/*<Switch>*/}
    {/*    <Route path={'/'} component={HHome} />*/}
    {/*</Switch>*/}

     <Footer/>

    </div>
  );
}

export default App;
