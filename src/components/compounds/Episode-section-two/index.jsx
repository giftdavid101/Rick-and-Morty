import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import './episode.style.css'
import SeasonsCard from "../../elements/SeasonsCard";


const EpisodeSection = () => {
    const [episodes, setEpisodes] = useState([])

    const mainURL = process.env.REACT_APP_BASE_URL

    const requestEpisodes = (episodeLink = `${mainURL}/episode?page=2`) => {

        Axios.get(episodeLink).then((response) => {
            const {data, status} = response
            console.log(data)
            if (status === 200) {
                setEpisodes(data.results)
            }

        })
            .catch((error) => {
                console.log(error)
            })

    }
    /**
     * Navigates pages
     * @param {'next' | 'prev'} action - takes 'next' or 'prev' actions
     */
    useEffect(() => {
        requestEpisodes();
        // eslint-disable-next-line
    }, [])

    return (
        <div className={"seasons-section"}>
            <div className={"seasons-section_ep-box"}>
                <h1 className={'seasons-section_ep-box_title'}>Latest Season</h1>
                <h4 className={'seasons-section_ep-box_sub-title'}>Season 4</h4>
                <div className={"seasons-section_episode-display-box"}>

                    <div className={"seasons-section_episode-display-box_seasons-container"}>
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
                                        <p><span>{el.episode} {" "}{el.name} </span></p>

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