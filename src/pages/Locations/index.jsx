import React, {useState, useEffect} from 'react';
import Axios from "axios";
import './locations.style.css';

import LocationCard from "../../components/elements/LocationCard";
import {Button} from "antd";



const Locations = ({filtered:input}) => {
    const [filtered,setFiltered] = useState([])
    const [loading, setLoading] = useState(false)
    const [locs, setLocations] = useState([])
    const [pagination, setPagination] = useState({});
    const mainURL = process.env.REACT_APP_BASE_URL


    const requestLocations = (links = `${mainURL}/location`) => {

        console.log({links})

        Axios.get(links)
            .then((response) => {
                setLoading(false)
                console.log(response)
                const {data, status} = response
                if (status === 200) {
                    setLocations(data.results)
                    setPagination(data.info)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const navigation = (action) => {
        switch (action) {
            case "next":
                pagination.next && requestLocations(pagination.next)
                break;
            case "prev":
                pagination.prev && requestLocations(pagination.prev)
                break;
            default:
                return
        }

    }


    console.log({locs})
    useEffect(() => {
        requestLocations();
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!input) {
            setLocations(locs)
        } else {
            const filteredLocations = locs.filter((el) => el.name.trim().toLowerCase().includes(input.trim().toLowerCase()))
            setFiltered(filteredLocations)
            // console.log(filteredEpisodes)
        }
        //eslint-disable-next-line
    }, [input])

    return (
        <div className={"locations"}>
            <div className={"locations_location-container"}>
                {  loading ?
                    <div style={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        loading...
                    </div>
                    :
                    filtered.length ?
                        filtered.map((el) => (
                            <LocationCard
                                key={el.id}
                                id={el.id}
                                image={el.image}
                                status={el.status}
                                gender={el.gender}

                                data={el}

                            >
                                <span className="card-meta_title">{el.name}</span>
                                <span className="card-meta_description">
                                    {new Date(el.created).toLocaleString()}
                                    </span>
                            </LocationCard>
                        ))
                        :
                    locs.length && locs.map((el) => (
                        <LocationCard
                            key={el.id}
                            id={el.id}
                            data={el}
                            name={el.name}
                            episode={el.episode}
                            created={el.created}
                            residents={el.residents}

                        >
                           <span>{el.name}</span>
                        </LocationCard>
                    ))
                }
                <>
                    <Button disabled={!pagination.prev} onClick={() => navigation('prev')}>Prev</Button>
                    <Button disabled={!pagination.next} onClick={() => navigation('next')}>Next</Button>
                </>
            </div>
        </div>
    );
};

export default Locations;