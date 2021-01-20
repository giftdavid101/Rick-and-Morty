import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import EpisodeCard from "../../elements/EpisodeCard";
import './episode.style.css'
import SeasonsCard from "../../elements/SeasonsCard";

const EpisodeSection = ({props}) => {
    const [episodes, setEpisodes] = useState([])
    // const [characters,setCharacters]= useState([])
    const [pagination, setPagination] = useState({});

    const mainURL = process.env.REACT_APP_BASE_URL

    const requestEpisodes = (episodeLink = `${mainURL}/episode?page=2`) => {
        // console.log({episodeLink})
        Axios.get(episodeLink).then((response) => {
            const {data, status} = response
            console.log(data)
            if (status === 200) {

                setEpisodes(data.results)
                setPagination(data.info)

            }

        })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        requestEpisodes();
    }, [])


    return (
        <div className={"episode-section "}>
            <div className={"episode-section_ep-box container"}>
                <h1>Latest Season</h1>
                <div><h4>Season 4</h4></div>


                <div
                    className={"episode-section_episode-display-box"}
                >


                    <div className={"episodes_episode-container"}>

                        {
                            episodes.length && episodes.map((el) => (
                                <SeasonsCard
                                    key={el.id}
                                    id={el.id}
                                    data={el}
                                    name={el.name}
                                    episode={el.episode}
                                    created={el.created}
                                    characters={el.characters}
                                >
                                    <ul>
                                        <p><span>{el.episode}{el.name} </span></p>

                                        <span>{new Date(el.created).toLocaleString()} </span>

                                    </ul>


                                </SeasonsCard>
                            )).slice(17)
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EpisodeSection;