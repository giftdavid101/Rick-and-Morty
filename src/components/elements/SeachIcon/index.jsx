import React from 'react';
import './searchicon.style.css'
import {RiSearch2Line} from "react-icons/all";
import InputBar from "../../compounds/Inputbar";

const SearchIcon = ({clickSearchIcon,setClickSearchIcon,searchCharacters}) => {
 const handleClickSearch = () => setClickSearchIcon(true)
    return (
        <div className='search-icon'>
            {
               clickSearchIcon ?
                  <InputBar searchCharacters={searchCharacters}/> :
                  <span  style={{fontSize:"40px"}} onClick={handleClickSearch}><RiSearch2Line/></span>
            }
        </div>
    );
};

export default SearchIcon;