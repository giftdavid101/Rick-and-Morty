import React from 'react';
import {Link} from 'react-router-dom';
import './csl.style.css'
const CSLSectionOne = () => {

    return (
        <div className={'csl-section '}>

            <div className={'csl-section_csl-cards'}>
              <div className={'csl-section_csl-cards_slanted-text'}>
                  <Link to={"/characters"}><span className={'text'}>Characters</span></Link>
              </div>
            </div>
            <div className={'csl-section_csl-cards'} >
             <div className={'csl-section_csl-cards_slanted-text'}>
                 <Link exact={'true'} to={"/episodes"}><span>Episodes</span></Link>
             </div>
            </div>
            <div className={'csl-section_csl-cards'}>
                <div className={'csl-section_csl-cards_slanted-text'}>
                    <Link to={"/locations"}><span >Locations</span></Link>
                </div>
            </div>
        </div>
    );
};

export default CSLSectionOne;