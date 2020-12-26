import React from 'react';
import {Link} from "react-router-dom";
import Input from "../../elements/Input";
import './navbar.style.css'
import img from '../../../img/rm.png'
import {AiOutlineHome} from "react-icons/all";



const Navbar = ({searchCharacters}) => {

    const handleChange = (e) => searchCharacters(e.target.value);

    return (
        <div className={'navbar container'}>
            <div className={'navbar_navbar-content'}>
            <div><Link to={'/'}><img className={'navbar_logo'} src={img} alt="Logo" /></Link></div>
            <div className={"navbar_input-container"}>
                <Input  placeholder={"Search for your favorite character..."} handleChange={handleChange}/>
            </div>
           </div>
            <div style={{fontSize:"40px"}}><AiOutlineHome /></div>

        </div>
    );
};

export default Navbar;