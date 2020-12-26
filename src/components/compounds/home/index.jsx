import React,{useState ,useEffect} from 'react';
import Axios from 'axios'
// import { Card } from 'antd';
import Card from '../../elements/Card'
import Info from "../../Info";
import './home.style.css'



    const Home = ({input ,characters, setCharacters}) => {
         // console.log(input)
        const [pagination, setPagination] = useState([])

        useEffect(() => {
            Axios.get('https://rickandmortyapi.com/api/character')
                .then((response) => {
                    const {data,status} = response
                    if(status === 200){
                        setCharacters(data.results)
                    }
                    console.log(data)
                })
                .catch((err) => console.log(err));
        }, []);

        useEffect(() => {
            if(!input){
                setCharacters(characters)
            }else {
               const filteredCharacters = characters.filter(el => el.name.trim().toLowerCase().includes(input.trim().toLowerCase()))
                setCharacters(filteredCharacters)
            }
        },[input])



    return (
        <div className={'home'}>
            <div className={"home_home-content container"}>
                {characters.length > 0
                    ? characters.map((el) => (

                        <Card
                            image={el.image}
                            handleClick={console.log}
                        >
                            <span className="card-meta_title">{el.name}</span>
                            <span className="card-meta_description">
                            {new Date(el.created).toLocaleString()}
                        </span>

                        </Card>

                    ))
                    : 'loading...'}
            </div>
        </div>
    )
}
export default Home;