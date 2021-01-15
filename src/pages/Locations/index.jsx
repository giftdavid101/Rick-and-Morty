import React, {useState, useEffect} from 'react';
import Axios from "axios";
import './locations.style.css';
import Card from '../../components/elements/Card';
import LocationCard from "../../components/elements/LocationCard";
import {Button} from "antd";
import EpisodeCard from "../../components/elements/EpisodeCard";

const Locations = () => {
    const [locs, setLocations] = useState([])
    const [pagination, setPagination] = useState({});
    const mainURL = process.env.REACT_APP_BASE_URL


    const requestLocations = (links = `${mainURL}/location`) => {

        console.log({links})

        Axios.get(links)
            .then((response) => {
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
    }, [])

    return (
        <div className={"locations"}>
            <div className={"locations_location-container"}>
                {
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
                            <ul>
                                <li><span>{el.name}</span></li>
                            </ul>

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