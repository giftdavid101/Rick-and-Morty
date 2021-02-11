import React from 'react';
import './searchicon.style.css'
import {RiSearch2Line} from "react-icons/all";
import InputBar from "../../compounds/Inputbar";
import {AiOutlineClose} from "react-icons/all";

const SearchIcon = ({clickSearchIcon,setClickSearchIcon,searchCharacters,setInput, filtered}) => {

 const handleClickSearch = () => setClickSearchIcon(true)
    const closeInputBar = () => setClickSearchIcon(false)

    return (
        <div className='search-icon'>
            {
               clickSearchIcon ?
                   <div style={{width:'100%' , display:'flex',justifyContent:'center', alignItems:'center'}}>
                     <InputBar setInput={setInput} filtered={filtered} searchCharacters={searchCharacters}/>
                     <div style={{color:'#1f0202', fontSize:'25px'}} onClick={closeInputBar}><AiOutlineClose/></div>
                  </div>
                  :
                  <span  style={{fontSize:"30px"}} onClick={handleClickSearch}><RiSearch2Line/></span>

            }
        </div>
    );
};

export default SearchIcon;