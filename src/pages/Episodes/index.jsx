import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import './episodes.styles.css';
import {Button} from "antd";



const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
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
            i love the episodes
            {
                episodes.length && episodes.map((el) => (
                    <div
                        key={el.id}
                        id={el.id}
                        data={el}
                        episode={el.episode}
                        created={el.created}
                    >
                        <ul>
                            <span>{el.episode}</span>
                            <span>{new Date(el.created).toLocaleString()} </span>
                            <span></span>
                        </ul>



                    </div>
                ))
            }

            <>
                <Button disabled={!pagination.prev} onClick={() => navigation('prev')}>Prev</Button>
                <Button disabled={!pagination.next} onClick={() => navigation('next')}>Next</Button>
            </>

        </div>
    );
};

export default Episodes;