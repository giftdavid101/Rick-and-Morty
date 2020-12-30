import React from 'react';
import './sidebar.style.css';
import {Link} from "react-router-dom";
import img from "../../../img/rm.png";


const SideBar = () => {
    return (
        <div className={'sidebar'}>
            <div>
                <Link to={'/'}><img className={'logo'} src={img} alt="Logo" /></Link>
            </div>
            <div className="sidebar_links-collection">
                <div className="sidebar_links-collection_link-item"><Link to={'/'}>Home</Link> </div>
                <div className="sidebar_links-collection_link-item"><Link to={'/'}>Latest Episodes</Link></div>
            </div>



        </div>
    );
};

export default SideBar;