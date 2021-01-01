import React from 'react';
import './dead.characters.style.css';
const DeadCharacters = () => {
    return (
        <div className={"dead-characters"}>
            <div className={"dead-characters_dc-box container"}>
               <h1>Dead Characters</h1>
                <div className={"dead-characters_dc-box_DC-display-container"}>
               <div className={"dead-characters_dc-box_DC-display-container_DC-display-box"}>
                   <div className={"dead-characters_dc-box_DC-display-container_DC-display-box_DC-card"}>Photo</div>
                   <div className={"dead-characters_dc-box_DC-display-container_DC-display-box_DC-card"}>Photo</div>
                   <div className={"dead-characters_dc-box_DC-display-container_DC-display-box_DC-card"}>Photo</div>
                   <div className={"dead-characters_dc-box_DC-display-container_DC-display-box_DC-card"}>Photo</div>
                   <div className={"dead-characters_dc-box_DC-display-container_DC-display-box_DC-card"}>Photo</div>
                   <div className={"dead-characters_dc-box_DC-display-container_DC-display-box_DC-card"}>Photo</div>
               </div>
            </div>
            </div>

        </div>
    );
};

export default DeadCharacters;