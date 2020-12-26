import React from 'react';
import './input.style.css'

const Input = ({placeholder, handleChange}) => {


    return (
        <>
            <input placeholder={placeholder} onChange={handleChange}/>
        </>
    );
};

export default Input;