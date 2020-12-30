import React from 'react';
import Input from "../../elements/Input";
import './navbar.style.css'




const InputBar = ({searchCharacters}) => {

    const handleChange = (e) => searchCharacters(e.target.value);

    return (
        <div className={'navbar container'}>
            <div className={'navbar_navbar-content'}>
               <div className={"navbar_input-container"}>
                <Input  placeholder={"Search for your favorite character..."} handleChange={handleChange}/>
               </div>
           </div>
        </div>
    );
};

export default InputBar;