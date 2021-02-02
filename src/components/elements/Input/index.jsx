import React from 'react';
import './input.style.css'

const Input = ({placeholder, value,handleChange}) => {


    return (
        <>
            <input value={value} placeholder={placeholder} onChange={handleChange}/>
        </>
    );
};

export default Input;