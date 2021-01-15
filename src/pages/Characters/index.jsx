import React, {useEffect, useState} from 'react';
import Card from '../../components/elements/Card';
import './characters.style.css'
import Axios from "axios";
import {Button} from "antd";
import SingleCharacter from "../../components/compounds/singleCharacter";
// import {Switch,Route} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import {FaGreaterThan, FaLessThan} from "react-icons/all";






const Characters = ({input}) => {

    const [characters, setCharacters] = useState([])
    const [filtered, setFiltered] = useState([])
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(false);
    console.log(filtered)
    const mainURL = process.env.REACT_APP_BASE_URL
    const page = withRouter(SingleCharacter)
    /**
     * Takes page number
     * @param {string} link - page link
     */
    const requestCharacters = (link = `${mainURL}/character`) => {
        console.log({link})
        setLoading(true)
        Axios.get(link)
            .then((response) => {
                setLoading(false)
                const {data, status} = response
                if (status === 200) {
                    setCharacters(data.results);
                    setPagination(data.info)
                }
            })
            .catch((err) => {
                // setLoading(false)
                console.log(err)
            });
    }
    /**
     * Navigates pages
     * @param {'next' | 'prev'} action - takes 'next' or 'prev' actions
     */
    const navigation = (action) => {
        switch (action) {
            case "next":
                pagination.next && requestCharacters(pagination.next)
                break;
            case "prev":
                pagination.prev && requestCharacters(pagination.prev)
                break;
            default:
                return
        }

    }



    useEffect(() => {
        requestCharacters();
        // eslint-disable-next-line
    }, []);




    useEffect(() => {
        if (!input) {
            setCharacters(characters)
        } else {
            const filteredCharacters = characters.filter(el => el.name.trim().toLowerCase().includes(input.trim().toLowerCase()))
            setFiltered(filteredCharacters)
        }

        //eslint-disable-next-line
    }, [input])


    return (
        <div className={'home'}>
            <div className={"home_home-content container"}>
                {loading ? <div style={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        loading...
                    </div> :
                    filtered.length ?
                        filtered.map((el) => (
                            <Card
                                key={el.id}
                                id={el.id}
                                image={el.image}
                                status={el.status}
                                gender={el.gender}
                                origin={el.origin.name}
                                data={el}

                            >
                                <span className="card-meta_title">{el.name}</span>
                                <span className="card-meta_description">
                                        {new Date(el.created).toLocaleString()}
                                </span>
                            </Card>
                        ))
                        :
                        characters.length ?
                            characters.map((el) => (
                                <Card
                                    key={el.id}
                                    id={el.id}
                                    image={el.image}
                                    status={el.status}
                                    gender={el.gender}
                                    origin={el.origin.name}
                                    data={el}
                                >
                                    <span className="card-meta_title">{el.name}</span>
                                    <span className="card-meta_description">
                                        {new Date(el.created).toLocaleString()}
                                    </span>
                                </Card>
                            ))
                            :
                            'no characters'
                }
            </div>
            {/*<Switch>*/}
            {/*<Route exact path={'/view-character'} component={SingleCharacter}/>*/}
            {/*</Switch>*/}
                   <>
                        <Button className={'butn'} disabled={!pagination.prev} onClick={() => navigation('prev')}><FaLessThan/></Button>
                        <Button className={'butn'} disabled={!pagination.next} onClick={() => navigation('next')}><FaGreaterThan/></Button>
                    </>
        </div>
    )
}
export default Characters;

