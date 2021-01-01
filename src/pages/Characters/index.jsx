import React, {useEffect, useState} from 'react';
import 'characters.style.css';
import Card from '../../elements/Card';
import './home.style.css'




const Home = ({input, characters, setCharacters, loading}) => {
    const [filtered, setFiltered] = useState([])

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
        </div>
    )
}
export default Home;

