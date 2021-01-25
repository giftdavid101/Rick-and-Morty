import React from 'react';
import './searchicon.style.css'
import {RiSearch2Line} from "react-icons/all";
import InputBar from "../../compounds/Inputbar";

const SearchIcon = ({clickSearchIcon,setClickSearchIcon,searchCharacters,setInput, filtered}) => {
 const handleClickSearch = () => setClickSearchIcon(true)
    return (
        <div className='search-icon'>
            {
               clickSearchIcon ?
                   <div style={{width:'100%', background:'purple' , display:'flex'}}>
                  <InputBar setInput={setInput} filtered={filtered} searchCharacters={searchCharacters}/>
                  <span>close</span>
                  </div>
                  :
                  <span  style={{fontSize:"40px"}} onClick={handleClickSearch}><RiSearch2Line/></span>

            }
        </div>
    );
};

export default SearchIcon;