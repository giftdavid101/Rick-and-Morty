import React from 'react';
import './episode.style.css'

const EpisodeSection = () => {
    return (
        <div className={"episode-section "}>
            <div className={"episode-section_ep-box container"}>
                <h1>Latest Season</h1>
                <div><h4>Season 4</h4></div>
                <div className={"episode-section_episode-display-box"}>
                    <div className={"episode-section_episode-display-box_EP-holder"}>EP1</div>
                    <div className={"episode-section_episode-display-box_EP-holder"}>EP2</div>
                    <div className={"episode-section_episode-display-box_EP-holder"}>EP3</div>
                </div>
            </div>
        </div>
    );
};

export default EpisodeSection;