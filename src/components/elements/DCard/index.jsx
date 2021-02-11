import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import Info from "../../Info";
import './dcard.style.css'

const DCard = ({children, image,status,gender,origin, data}) => {
    const [showInfo, setShowInfo] = useState(false)
    const history = useHistory()


    const handleClick = () => {
        setShowInfo(true)
        history.push('/characters/single-characters', {...data})
    }
    return (
        <div>
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

export default DCard;