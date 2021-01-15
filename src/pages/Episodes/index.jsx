import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import './episodes.styles.css';
import {Button} from "antd";
import EpisodeCard from "../../components/elements/EpisodeCard";



const Episodes = (props) => {
    const [episodes, setEpisodes] = useState([])
    // const [characters,setCharacters]= useState([])
    const [pagination, setPagination] = useState({});

    const mainURL = process.env.REACT_APP_BASE_URL

    const requestEpisodes = (episodeLink = `${mainURL}/episode`) => {
     console.log({episodeLink})
    Axios.get(episodeLink).then((response) =>{
        const {data,status} = response
        console.log(response)
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
    return (
        <div className={"episodes"}>

            <div className={"episodes_episode-container"}>

            {
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
                        <ul>
                            <p><span>{el.episode}{el.name} </span></p>

                            <span>{new Date(el.created).toLocaleString()} </span>

                        </ul>



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