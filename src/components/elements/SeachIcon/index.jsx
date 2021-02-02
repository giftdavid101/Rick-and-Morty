import React from 'react';
import './searchicon.style.css'
import {RiSearch2Line} from "react-icons/all";
import InputBar from "../../compounds/Inputbar";
import {AiOutlineClose} from "react-icons/all";

const SearchIcon = ({clickSearchIcon,setClickSearchIcon,searchCharacters,setInput, filtered}) => {
 const handleClickSearch = () => setClickSearchIcon(true)

    return (
        <div className='search-icon'>
            {
               clickSearchIcon ?
                   <div style={{width:'100%', background:'#861931' , display:'flex',justifyContent:'center', alignItems:'center',height:'80px'}}>
                     <InputBar setInput={setInput} filtered={filtered} searchCharacters={searchCharacters}/>
                     <div style={{color:'#1f0202', fontSize:'25px'}}><AiOutlineClose/></div>
                  </div>
                  :
                  <span  style={{fontSize:"30px"}} onClick={handleClickSearch}><RiSearch2Line/></span>

            }
        </div>
    );
};

export default SearchIcon;