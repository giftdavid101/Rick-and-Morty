import React, {useState, useEffect} from 'react';
import './dead.characters.style.css';
import Axios from 'axios';
import DCard from "../../elements/DCard";


const DeadCharacters = () => {

    const [characters, setCharacters] = useState([])
    const [filtered, setFiltered] = useState([])
    const mainURL = process.env.REACT_APP_BASE_URL
    console.log(characters)


    const requestDeadCharacters = (link = `${mainURL}/character`) => {
        Axios.get(link).then((response) => {
            const {data, status} = response
            console.log(response)
            if (status === 200) {
                setCharacters(data.results)
            }
        })
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        requestDeadCharacters();
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (!characters) {
            setCharacters(characters)
        } else {
            const deadCharacters = characters.filter(el => el.status === 'Dead')
            setFiltered(deadCharacters)
        }

        //eslint-disable-next-line
    }, [characters])


    return (
        <div className={"dead-characters"}>
            <h1 className={'dead-characters_title'}>Dead Characters</h1>
            <div className={"dead-characters_dc-box "}>

                <div className={"dead-characters_dc-box_content"}>
                    {filtered.length ?
                        filtered.map((el) => (
                            <DCard
                                key={el.id}
                                id={el.id}
                                image={el.image}
                                status={el.status}
                                gender={el.gender}
                                origin={el.origin.name}
                                data={el}
                            >
                                <span className="card-meta_title">{(el.status)}</span>
                                <span className="card-meta_description">

                                        {new Date(el.created).toLocaleString()}
                            </span>
                            </DCard>
                        ))
                        :
                        'no characters'

                    }

                </div>
            </div>

        </div>


    );
}

export default DeadCharacters;