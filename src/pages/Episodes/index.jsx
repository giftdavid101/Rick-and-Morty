import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import './episodes.styles.css';
import {Button} from "antd";
import EpisodeCard from "../../components/elements/EpisodeCard";
import Card from "../../components/elements/Card";


const Episodes = ({filtered:input}) => {

    const [episodes, setEpisodes] = useState([])
    const [filtered, setFiltered] = useState([])
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(false)
    const mainURL = process.env.REACT_APP_BASE_URL

    // console.log(episodes)
    // console.log(filtered)
    const requestEpisodes = (episodeLink = `${mainURL}/episode`) => {
        console.log({episodeLink})
        setLoading(true)
        Axios.get(episodeLink).then((response) => {
            setLoading(false)
            const {data, status} = response
            // console.log(response)
            if (status === 200) {
                setEpisodes(data.results)
                setPagination(data.info)
            }
        })
            .catch((error) => {
                console.log(error)
            })

    }


    // const check = (re,rc) => {
    //     if (re.includes(rc)){
    //         console.log(rc)
    //     }
    // }

    const navigation = (action) => {
        switch (action) {
            case "next":
                pagination.next && requestEpisodes(pagination.next)
                break;
            case "prev":
                pagination.prev && requestEpisodes(pagination.prev)
                break;
            default:
                return
        }

    }
    useEffect(() => {
        requestEpisodes();
    }, [])

    useEffect(() => {
        if (!input) {
            setEpisodes(episodes)
        } else {
            const filteredEpisodes = episodes.filter(el => el.episode.trim().toLowerCase().includes(input.trim().toLowerCase()))
            setFiltered(filteredEpisodes)
            // console.log(filteredEpisodes)
        }

        //eslint-disable-next-line
    }, [input])
    return (
        <div className={"episodes"}>

            <div className={"episodes_episode-container"}>

                {
                    loading ? <div style={{
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
                                <EpisodeCard
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
                                </EpisodeCard>
                            ))
                            :
                            episodes.length && episodes.map((el) => (
                                <EpisodeCard
                                    key={el.id}
                                    id={el.id}
                                    data={el}
                                    name={el.name}
                                    episode={el.episode}
                                    created={el.created}
                                    characters={el.characters}
                                >
                                    <div>
                                        <p>{el.episode}</p>
                                        <p>{el.name} </p>
                                        {/*<span>{new Date(el.created).toLocaleString()} </span>*/}


                                    </div>
                                </EpisodeCard>
                            ))

                }
            </div>
            <>
                <Button disabled={!pagination.prev} onClick={() => navigation('prev')}>Prev</Button>
                <Button disabled={!pagination.next} onClick={() => navigation('next')}>Next</Button>
            </>

        </div>
    );
};

export default Episodes;