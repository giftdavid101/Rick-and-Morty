import React,{useState} from 'react';
import './card.style.css'
import Info from "../../Info";
import { useHistory } from 'react-router-dom'

const Card = ({children, image,status,gender,origin, data,id}) => {
    const [showInfo, setShowInfo] = useState(false)
    const history = useHistory()
    console.log({data})

    const handleClick = () => {
        setShowInfo(true)
        history.push('/view-character', {...data})
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

export default Card;