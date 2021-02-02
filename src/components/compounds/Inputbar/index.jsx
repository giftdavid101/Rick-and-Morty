import React from 'react';
import Input from "../../elements/Input";
import './navbar.style.css'


const InputBar = ({ setInput, filtered}) => {

    return (
        <div className={'navbar container'}>
            <div className={'navbar_navbar-content'}>
               <div className={"navbar_input-container"}>
                <Input   placeholder={"Search for your favorite character..."} handleChange={(e) => setInput(e.target.value)} value={filtered}/>
               </div>
           </div>
        </div>
    );
};

export default InputBar;