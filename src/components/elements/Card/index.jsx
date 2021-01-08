import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './card.style.css'
import Info from "../../Info";
import { useHistory } from 'react-router-dom'

const Card = ({children, image,status,gender,origin, data,id}) => {
    const [showInfo, setShowInfo] = useState(false)
    const history = useHistory()
    // console.log({data})

    const handleClick = () => {
        setShowInfo(true)
        history.push('/characters/single-characters', {...data})
    }


    return (
        <div className="card" key={id} >
            <div  className="card-img" onClick={handleClick}>
                <img alt="character" src={image}/>
            </div>
            <div className={"card-meta"}>
                {children}
            </div>

            {
                showInfo ? <Info>
                    <div>Status: {status}</div>
                    <div>Gender: {gender}</div>
                    <div>Origin:{origin}</div>
                </Info>:null
            }
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.any,
    image: PropTypes.string,
    status: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.string,
    data: PropTypes.object
};

export default Card;